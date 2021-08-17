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






