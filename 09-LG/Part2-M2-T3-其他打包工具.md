## Rollup 
### 概述
- 也是一款 ESM 打包器
- Rollup 和 Webpack 作用很类似
- Rollup 更为小巧
- 仅仅是一款 ESM 打包器
- 他的目的不是为了和 webpack 竞争 
- 为了提供一个充分利用 ESM 各项特性的高效打包器

### 快速上手
- 安装
```sh
yarn init -y

yarn add rollup -D
```
- 配置文件
```js
// rollup.config.js
export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife' // 输出的格式 立即调用函数
    }
}
```

### 打包的特点 
- 打包后的代码很简洁  就像手写的一样 只是处理的 ESM 的引用关系
- 没有引用的代码  也是 shaking 掉了   tree-shaking 的概念就是在 Rollup 中提出的
- 

### 使用插件


