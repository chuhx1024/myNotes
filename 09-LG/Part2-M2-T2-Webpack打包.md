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
- 修改配置  在根目录 添加  webpack.config.js 文件 它是在 node 环境运行的 所以要遵循  CommonJS 规范
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
- 借助 loader 就可以加载任何类型的资源

### Webpack 导入资源入口
- 最终是要 js 作为打包入口的
- 这个 js 会把所有的资源加载到项目中 所以在 main.js 引入 .css 继续打包
```js
// main.js
import './main.css'
```
- webpack 建议在 js 中引入 .css
    - 不仅仅如此 webpack 建议我们在使用资源得时候在再去引入资源

### Webpack 常用的 Loader
- 文件资源加载器 file-loader
    - 项目中的 图片 字体 是没有办法通过 js 的方式引入
```sh
yarn add file-loader -D
```
```js
module: {
    rules: [
        {
            test: /.png$/,
            use: ['file-loader']
        }
    ]
}
```
- Data URLs 加载器 url-loader
    - 可以将图片转换为 Base64
    - 原则:
        - 小文件使用 Data URLs, 减少请求次数 (使用 url-loader)
        - 大文件单独存放, 提高加载速度 (使用 file-loader) 
```sh
yarn add file-loader -D
```
```js
module: {
    rules: [
        {
            test: /.png$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024 // 10kb
                }
            }
        }
    ]
}
```

- 常用 Loader 分类
    - 编译转换类
        - css-loader
        - babel-loader
        ```sh
        # babel-loader (基础) @babel/core(核心) @babel/preset-enb(转换ES6)
        yarn add babel-loader @babel/core @babel/preset-env -D
        ```
    - 文件操作类: 拷贝 + 资源导出
        - file-loader
    - 代码检查类: 通过/不通过  一般不会去主动修改我们的代码
        - eslint-loader

### Webpack 的模块加载方式
#### JS 模块加载
- 最基础: 遵循 ES Modules 标准的 import 引用
- 其次也遵循 CommonJS 标准的 require 函数
```js
// 但是在 Webpack 中使用 require 需要 .default
const ccc = require('./ccc.js').default
```
- 遵循 AMD 标准的 define 函数和 require 函数 也支持
- 虽然三种都支持 不是必要  一定不要混合使用标准 造成代码不规范 不利于维护

#### 非 JS 资源加载
- Loader 加载
    - 样式代码中使用  @import 和 url 函数
    - html-loader 加载 html 中的图片 src 属性

#### 开发一个 Loader : 开发一个 MD loader
- 定义一个 js
```js
module.exports = source => {
    console.log(source) // source 就是输入
    // 这里可以做很多事
    return 'hello' // return 就是加工后的输出
}
```
- 使用: 
    - 发布为 npm 包使用
    - 放文件根目录 使用相对路径 就可以使用
```js
 {
    test: /.md$/,
    use: {
        loader: './markDown-loader.js',
        options: {
            limit: 10 * 1024 // 10kb
        }
    }
}
```
- 本质: 
    - Loader 类似于管道  就是负责资源文件从输入到输出的转换
    - 既然是管道  就可以把一个资源文件 交给多个 loader 去处理  (注意顺序 从后向前)

### Webpack 插件机制
- 增强 Webpack 的自动化能力
- 解决除了资源加载以外的其他自动化工作
    - e.g. 打包前自动清除 dist 目录
    - e.g. 拷贝静态文件到输出目录
    - e.g. 压缩输出代码


#### 清除 dist 目录  clean-webpack-plugin
```sh
yarn add clean-webpack-plugin -D
```
```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
plugins:[
    new CleanWebpackPlugin()
]
```

#### 自动生成使用 bundle.js 的HTML html-webpack-plugin
- 以前都是 自己写 index.html 引入生成的 html 
    - 项目发布时 要同时发布 打包文件 和根目录的 index.html 文件
    - 还要保证 index.html 中路径的引用是正确的

```sh
yarn add html-webpack-plugin -D
```
```js
const HtmlwebpackPlugin = require('html-webpack-plugin')
plugins:[
    new HtmlwebpackPlugin({
            template: './src/index.html',
            title: '我就是自定义的标题'
    })
]

// ./src/index.html 为 模板文件 EJS 语法
// htmlWebpackPlugin.options. 可以去到传入的参数
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= htmlWebpackPlugin.options.title%></title>
</head>
<body>
</body>
</html>
```
#### 实现数据的拷贝 copy-webpack-plugin
```sh
yarn add copy-webpack-plugin -D 
```
```js
const copyWebpackPlugin = require('copy-webpack-plugin')
new copyWebpackPlugin({
    patterns: [
        { 
            from: path.join(__dirname,'public'),
            to: 'public' 
        }
    ],
})
```

#### Webpack 插件机制
- Plugin 通过钩子机制实现
- 定义一个类
- 提供一个apply 方法
- 在 apply 方法里边可以使用钩子函数做很多的操作
```js
class MyPlugin {
    apply(compiler) {
        console.log('MyPlugin 启动')
        // emit 就是打包后最后要写入 dist 前的钩子函数
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation 可以理解为此次打包的上下文
            for (const name in compilation.assets) {
                console.log(name)
            }
        })
    }
}
```








    






