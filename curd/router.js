const express = require("express");
const router = express.Router();
const db = require("./db");

/*首页渲染*/
router.get("/",(req, res)=>{
    db.select(
        data=>{
            let users = JSON.parse(data.toString());
            res.render("index.html", {
                userInfo: users.user_info
            });
        }
    );
});

/*详情页渲染*/
router.get("/detail",(req, res)=>{
    console.log("detail page");
    let id = parseInt(req.query.id,  10);
    db.select(
        data=>{
            let users = JSON.parse(data.toString());
            let userInfo = users.user_info;
            let userItem = userInfo.find(item=>{return id === item.id });
            res.render("edit.html", {
                value: userItem
            });
        }
    );
});

/*编辑页渲染*/
router.get("/edit",(req, res)=>{
    console.log("edit page");
    let id = parseInt(req.query.id,  10);
    db.select(
        data=>{
            let users = JSON.parse(data.toString());
            let userInfo = users.user_info;
            let userItem = userInfo.find(item=>{return id === item.id });
            res.render("edit.html", {
                value: userItem
            });
        }
    );
});

/*添加页渲染*/
router.get("/new",(req, res)=>{
    res.render("new.html");
});

/*添加数据数据*/
router.post("/add",(req, res)=>{
    db.add(req.body, ()=>{
        res.redirect("/");
    });
});

/*更新数据*/
router.post("/update",(req, res)=>{
    console.log("update data");
    db.update(req.body, ()=>{
        res.redirect("/");
    });
});

/*删除数据*/
router.get("/delete",(req, res)=>{
    db.deleteById(req.query, ()=>{
        res.redirect("/");
    })
});


module.exports = router;
