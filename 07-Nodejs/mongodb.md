# mongodb 基础

## 在 docker 中的使用和操作
- 创建容器
```sh
docker pull mongo:latest
docker run -itd --name mongo -p 27017:27017 mongo
```
- 进入容器
```sh
docker exec -it 1f5c mongo  ( 1f5c 为容器 ID )
```
- 显示所有 数据库
```sh
show dbs
```
- 显示当前连接的数据库
```
db
```
- 切换连接的数据库(没有会自动创建)
```sh
use [数据库名字] 
```
- 显示数据库所有 表
```sh
show tables

```
- 查询表所有数据
```sh
db.users.find()
{ "_id" : ObjectId("5fbb649ad512073cc87e59cb"), "username" : "admin", "password" : "admin", "create_time" : 1606116506042, "__v" : 0 }
```

- 删除一项
```sh
db.users.remove({username: 'admin'})
// WriteResult({ "nRemoved" : 1 })
```
- 删除整个表
```sh
db.users.drop()
// true
```
