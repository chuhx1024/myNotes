# Vite 实现原理

### 概念
- Vite 是一个面向现代浏览器的一个更轻 更快的 Web 应用开发工具
- 它基于 ESM系统实现
- 为了解决 webpack 在开发过程中需要编译 冷启动 时间过长
- 少了很多配置文件和依赖

- vite 就是一个命令行工具
- @vue/compiler-sfc 就是编译 .vue 文件的
- 使用其他模板也可以构建其他项目  如 React

### 基本使用
- vite serve
    - 启动一个用于开发的服务器
    - 启动时不需要编译所有的代码文件 启动速度很快
    - 直接启动 一个 web Server 当请求单文件时 在服务端 编译文件 返回(即时编译)
    - webpack 是提前将项目所有都打包到 bundle(内存)中 项目越大 内存中的文件就越大 就会越慢
- HMR (热更新)
    - Vite HMR 立即编译当前修改的文件
    - Webpack HMR 会自动以修改的这个文件为入口重新 build 一次 所涉及的依赖都会被加载一遍

- vite build
    - 使用 Rollup 打包

### 问题: 打包 or 不打包
- 使用 webpack 打包的原因
    - 浏览器环境不支持模块化
    - 零散的模块文件会产生大量的 Http 请求

### Vite 的特点
- 快速的冷启动
- 模块热更新
- 按需编译
- 开箱即用

### 核心功能
- 开启一个 静态 web 服务器
- 编辑单文件组件(拦截浏览器不识别的模块 并处理)
- HMR

### 开发一个自己的 vite
- 第一步 用 Koa 实现一个 web 静态服务器
    - 初始化一个 npm 项目  npm init 生成 package.json
    - 安装依赖  koa koa-send(处理静态文件的)
    - 设置 bin 入口  bin:index.js
    - 设置 name 工具包名字 my-vite-cli (不要和已存在的包名重复)
    - 在 index.js 文件 开头写上  #!/usr/bin/env node  文件头  告诉系统我们开发的是 node 项目
    - 然后就是 koa 那一套   监听 3000端口
 - 第二步  执行 npm link 
 - 测试工具  进入一个 基于 vue3开发的项目  在终端中输入  my-vite-cli 基本架子就有了  

- 查看页面 localhost:3000 页面是空白的  因为  没有处理第三方模块  
    - 浏览器原生不支持  import vue from 'vue'
    - 需要我们自己配置
        - 思路 查看 官方 vite 启动的项目  人家是  import vue from '@modules/vue'
        - 需要我们自己 单独处理 加载第三方模块问题
- 处理单文件
    - 

















