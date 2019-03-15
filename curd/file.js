const fs = require("fs");

let file = {
    read(path, cb){
        console.log(path);
        const rs = fs.createReadStream(path);

        rs.on("data", data=>{
            console.log(data);
            cb(data);
        });
    },
    overWrite(dbPath, data, cb){
        // 把字符串保存到文件中
        fs.writeFile(dbPath, data , function (err) {
            if (err) {
                // 错误就是把错误对象传递给它
                return cb(err)
            }
            // 成功就没错，所以错误对象是 null
            cb(null)
        })
    }
};

module.exports = file;
