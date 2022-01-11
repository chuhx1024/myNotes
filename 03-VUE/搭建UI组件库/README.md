# 搭建UI组件库
## 1. 初始化一个项目 hx-ui
```sh
vue create hx-ui
// 选择 babel lint sass 就够了 不需要 vuex 和 router等
```
## 2. 目录调整

- 根目录创建两个文件夹packages和examples
- packages: 用于存放所有的组件 examples: 用于进行测试,把src改成examples
- 把components中所有的组件放入到packages中
- 把fonts放到packages中
- 删除原来的src目录

## 3. vue.config.js配置
```js
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
```
修改 package.json
```js
"private": false,
"main": "dist/itcast-ui.umd.min.js",
"author": {
  "name": "胡聪聪"
},
```
增加 `.npmignore文件
```js
# 忽略目录
examples/
packages/
public/
 
# 忽略指定文件
vue.config.js
babel.config.js
*.map
```
npm发布
```js 
npm login  // 主要要切换为 npm源 
npm publish
```

笔记: https://segmentfault.com/a/1190000039748000?utm_source=sf-similar-article



