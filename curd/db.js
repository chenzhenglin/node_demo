const file = require("./file");

let db = {};

/*查询数据*/
db.select = (cb)=>{
    file.read("pub  lic/userInfo.json", data=>{
        cb(data);
    })
};

/*添加数据*/
db.add = (oStr, cb)=>{
  file.read("public/userInfo.json",  data=>{
      let users = JSON.parse(data.toString());

      let userInfo = users.user_info;

      oStr.id = userInfo[userInfo.length - 1].id;
      userInfo.push(oStr);

      let userStr = JSON.stringify({user_info: userInfo});

      file.overWrite("public/userInfo.json", userStr, cb);
  })
};

/*删除数据*/
db.deleteById = (id, cb)=>{
    file.read("public/userInfo.json",  data=>{
        let users = JSON.parse(data.toString());

        let userInfo = users.user_info;

        let delId = parseInt(id, 10);

        let index = userInfo.findIndex(item => { return delId === item.id });
        userInfo.splice(index,1);

        let userStr = JSON.stringify({user_info: userInfo});

        file.overWrite("public/userInfo.json", userStr, cb);
    })
};

/*更新数据*/
db.update = (oStr, cb)=>{
    file.read("public/userInfo.json",  data=>{
        let users = JSON.parse(data.toString());

        let userInfo = users.user_info;

        oStr.id = parseInt(oStr.id,10);
        console.log(oStr);
        let userItem = userInfo.find(item => { return oStr.id === item.id });
        console.log(userItem);
        /*拷贝对象*/
        for(let key in oStr) {
            userItem[key] = oStr[key];
        }

        let userStr = JSON.stringify({user_info: userInfo});

        file.overWrite("public/userInfo.json", userStr, cb);
    })
};
module.exports = db;
