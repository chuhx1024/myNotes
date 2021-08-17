# Webpack 打包
### 前端打包工具
- Webpack
- Rollup
- Parcel

### Webpack
- 可以将零散的代码  打包到一个 文件中
- 对于环境有兼容性的代码  我们就可以在打包的过程中加工一下(Loader) 在整合
- 还有代码拆分功能  可以不把代码全部打包到一起 产生的文件比较大的问题
    - 只把初次运行时 必要的文件打包到一起
    - 对于其他的模块再单独存放 (需要的时候在 异步的加载进来)
- 可以实现 资源模块的加载  import 方式 引入 css
- 这里的模块化 是对整个前端项目的模块化  不仅仅是 JS 的模块化 
- 可以更好的体验模块化带来的优势  还不用担心模块化带来的弊端

### 快速上手
```sh
yarn init -y
yarn add webpack webpack-cli -D

# 执行 
yarn webpack 
```

### Webpack 的配置文件
- 从 Webpack 4 开始 支持 0 配置打包  因为有很多默认约定
```sh
yarn webpack   # 会默认 从 src/index.js  打包到 dist 目录
```
```js
// webpack.config.js
const path = require('path')
module.exports = {
    // 打包的入口文件
    entry: './src/main.js',
    // 打包的出口文件 
    output: {     
        filename: 'bundle.js', // 生成的打包文件 默认为 main
        // 这里需要一个 绝对路径 需要借助 node 的 path 模块
        path: path.join(__dirname, 'output') 
    }
}
```

### Webpack 的三种模式
- 默认 production 
    - 此模式会启动很多生产环境需要的优化配置
```sh
yarn webpack  # 直接启用 production 模式
```
- 启用 development 模式
    - 此模式 webpack 会优化打包的速度 添加一些调试的辅助代码
```sh
yarn webpack --mode development
```
- 启用 none 模式
    - 运行最原始的打包 不会做额外的处理
```sh
yarn webpack --mode none
```
- 除了可以在 命令行中配置模式  还可以在 配置文件中 添加  mode: '' 字段来配置

### Webpack 打包结果运行原理
- 打包后的代码不会太复杂
- 只是把所有的模块放在同一个文件中
- 还要提供一些基础的代码 让我们的模块直接相互依赖的关系保持原有的状态

### Webpack 资源模块加载
- webpack 不仅仅是 js 打包工具
- 还可以处理图片 css 等资源
- 需要通过 loader
```sh
yarn add css-loader style-loader -D
```
```js
module: {
    rules: [
        {
            test: /.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
}
```
- Loader 是 webpack 实现打包的 核心





