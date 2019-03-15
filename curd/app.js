
/*加载模块*/
const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const app = express();

/*加载模板引擎*/
app.engine("html", require("express-art-template"));

/*post 数据获取插件*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*开放公共资源*/
app.use("/views/", express.static("./views/"));
app.use("/public/", express.static("./public/"));
app.use("/node_modules/", express.static("./node_modules/"));

/*使用路由*/
app.use(router);

/*监听端口*/
app.listen(8080,()=>{
  console.log("server running...");
});
