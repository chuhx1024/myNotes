#搭建自己的脚手架

## 目的:
- 效率: 一键生成一个项目
- 性能: 固定一些工程化的配置  如 字典 全局过滤器  iconfont 等

## 步骤:

### 1. 新建一个项目目录
```
mkdir chuhx_cli

cd chuhx_cli

touch index.js

npm init -y 

```
### 2. 执行 npm link
#### 准备文件
1. index.js 
```js
#!/usr/bin/env node
consol.log(123) // #! 的目的是告诉系统使用 node 来执行文件
```
2. package.json
```
"bin": {
    "jay": "index.js"
},
```
#### 开始执行 
```sh
sudo npm link
```
#### 测试
```sh
命令行输入 jay  就类似与  node index.js
```

### 3. 安装 Commander.js  完整的 node.js 命令行解决方案。 tj 大佬开发的 对前端的贡献很大
#### 目的
- 为了执行 jay --help 显示 帮助
- 执行 jay --vision 显示版本
- 可以理解为 命令行中 if-else 的一个封装
```
npm i commander
```