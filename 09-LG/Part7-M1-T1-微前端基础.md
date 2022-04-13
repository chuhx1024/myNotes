## 微前端
### 一. 基础概念
- 微前端是一种软件架构 可以将前端应用拆解成更小的能够独立开发部署的微型应用
- 然后将这些微型应用组合起来 使其成为整体应用的架构模式
- 微前端架构 类似于组件架构 但是不同的是 组件不能单独构建和发布, 但是微前端中的应用可以
- 微前端架构与框架无关, 每个微应用都可以使用不同的框架(vue, angle, react)

### 二. 价值
- 增量开发
    - 老项目用 angular 开发好几年了  再开发 不好招聘人, 现有开发人员也想更新技术栈, 现有框架也有无法满足的需求
    - 直接迁移 浪费成本
    - 微前端架构 可以保留原来项目 同时使用新技术开发新需求, 然后再用微前端架构 进行整合

- 独立发布
    - 更新按钮 只用单独发布按钮就可以了

- 允许单个团队做出技术决策 
    - 可以让不同团队 使用自己擅长的技术栈

### 三. 使用场景
- 拆分巨型应用
- 兼容历史应用, 实现增量开发

### 四. 如何实现
- 多个微应用如何组合
    - 除了多个微应用 还要有一个 容器应用
- 如何防止 微应用和微应用之间路由发生冲突
    - 当路由发生变化时  容器应用会先拦截路由 根据路由匹配微应用
    - 当匹配到微应用后 在匹配微应用内部的路由
- 状态共享
    - 发布订阅模式, 使用 RxJS 库
- 实现框架和库的共享
    - 通过 import-map 加载在线资源
    - 同时还要修改 webpack 的 externals 属性 告诉webpack 哪些模块式不需要打包的


## Systemjs
### 一. 概念
- 是一个用于实现模块化的 JavaScript 库, 有属于自己的模块化规范
- 开发是使用 ESM 模块规范  webpack 打包时 打成 systemjs 的模块规范

#### 小案例 把一个 react 项目 变成一个微应用
- 步骤:
    - npm init 初始化一个 npm 环境
    - 配置 webpack 
        - output 属性 添加 libraryTarget: 'system

    - 根文件 index.html 要添加
        ```
        <script type="systemjs-importmap">
         {
             imports: { // 有了这个  react 开发时  就不用引用 react react-dom 等等了
                 react: 'cdn 路径',
                 react-dom: 'cdn 路径',
                 ....等等
             }
         }
        </script> // 虽然 浏览器原生支持  importmap  但是支持的不好 我们使用 systemjs-importmap
        <scripr src='systemjs cdn 路径'>

        <script>
            System.import('./index.js) // 最简单React 页面就出来了
         </script>
        ```

## single-spa 概述
- 是一个实现微前端架构的框架
- 里边有三种微前端应用
    - sigle-spa root config: 创建微应用的容器  
    - sigle-spa-application/parcel(包裹) : 就是微应用 如 (vue, react, anguler, 原生)
    - utility modules: 公共模块应用 非渲染组件 用于跨应用共享

- 使用
    - 使用脚手架创建一个容器应用

        - create-single-spa
        - 选择创建那种微应用 (前边三种选一个)
        - 还要输入一个组织名称(可以标示这个微应用是哪个团队创建的)
        - 完成以后 就可以 npm start 启动应用了 9000端口暴露了


- 创建一个微应用 集成
    - 任意一个项目  webpack 配置中 要引入  single-spa 响应的插件

    - 在容器应用中 study-root-config.js 中注册 路由

    - 在 index.ejs 中 注册 引入 微应用的路径


- 创建一个 vue  微应用  
    - 还使用  create-single-spa 选择  sigle-spa-application/parcel --> vue
    - 然后就是 vue cli 创建 vue项目了
    - 然后修改 vue.config.js 中webpack 的配置 不要打包 vue vue-router   
    - 然后再 容器应用的入口 cdn 引入 vue  vue-router
    - 修改 启动端口  然后 yarn serve


    - 在容器应用中 study-root-config.js 中注册 路由
    - 在 index.ejs 中 注册 引入 微应用的路径

- 创建一个 parcel 应用
    - 方式一样
    - 只是他不关联路由  也是一个单独的yingyong
    - 其他微应用可以通过特定的 api  来调用它

- 使用布局引擎 可以更好的加载微应用
    - 现在  sing-spa-layout


## 模块联邦
- 模块联邦也可以实现 微前端架构
 
- webpack 5 实现的功能
- 思路 把一个应用当成一个模块 就可以加载了
