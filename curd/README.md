# 简易增删改查



## 页面路由表

请求链接|请求类型|参数|备注
-|-|-|-
/|GET||请求index.html
/curd/|GET||请求index.html
/curd/index.html|GET||请求index.html
/detail|GET|id|请求detail.html
/edit|GET|id|请求edit.html

## 接口路由表

| 请求链接 | 请求类型 | 参数                         | 备注 |
| -------- | -------- | ---------------------------- | ---- |
| /add     | POST     | id、name、gender、age、email | 增加 |
| /update  | POST     | id、name、gender、age、email | 更新 |
| /delete  | GET      | id                           | 删除 |
|          |          |                              |      |

