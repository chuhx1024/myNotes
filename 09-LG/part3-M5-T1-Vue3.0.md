# Vue3.0

### 介绍
- 使用 TS 编写 替换了 flow
- Composition API
- 90% 的 API 兼容 2.X
- 性能提升
    - 使用 proxy 做响应式
    - 优化了编译器 重写了 虚拟 DOM 
    - 让渲染和 update 的性能都有了大幅提升
    - 官方介绍 服务端渲染性能 提升 2 到 3倍
    - vite 开发是不需要打包 可以直接运行 提升开发效率

### 源码组织方式
- 使用 TS
- 使用 Monorepo 管理项目结构
    - 一个项目管理多个包
    - 每个包都可以单独发布 单独使用
- 项目结构
```js
|__packages/..................... 包目录 Monorepo 项目一般都这么组织结构
|  |__compiler-core/ ................. 和平台无关的编译器
|  |__compiler-dom/ ................. 浏览器下的编译器 依赖 compile-core
|  |__compiler-sfc/ ................. 编译单文件组件  依赖 compile-core compile-dom
|  |__compiler-srr/ ................. 服务端渲染相关
|  |__reactivity/ ................... 数据响应式系统
|  |__runtime-core................... 和平台无关的运行时
|  |__runtime-dom.................... 针对浏览器的运行时 处理DOM原生API和事件等... 
|  |__runtime-test................... 为测试 专门编写的运行时 轻量  渲染出来的Dom是一个js 对象 所以可以运行在所有的js 环境中
|  |__server-render/................. SSR, 服务端渲染
|  |__shard/......................... 内部使用的 公共api 
|  |__size-check/.................... 是一个私有的包 不会发布到 npm  作用是 tree-sharking 后检查代码的大小 
|  |__template-explorer.............. 浏览器运行的 实时编译组件 会输入 render函数 在 readme 中提供在线访问的地址
|  |__vue/........................... 构建完整版的 Vue
```

### 不同构建版本(分为四类)

- cjs(commonJS 规范) 都是完整版的(编译器和运行时)
    - vue.cjs.js (没有压缩)
    - vue.cjs.prod.js (压缩)

- global (全局的  可以通过 script 标签导入 导入后会有个 Vue 全局对象)
    - vue.global.js
    - vue.global.prod.js
    - vue.runtime.global.js
    - vue.runtime.global.prod.js

- brower (浏览器原生版本 可以直接通过 script type=module 的方式导入)
    - vue.esm.brower.js
    - vue.esm-brower.prod.js
    - vue.runtime.esm-browser.js
    - vue.runtime.esm-browser.prod.js

- bundler (没有打包的 需要配合打包工具使用)
    - vue.esm-bundler.js
    - vue.runtime.esm-bundler.js

### Composition API 

#### vue RFC (https://github.com/vuejs/rfcs)
- 收集需求
#### 设计动机
- vue 2.0 在开发中 小型项目时 很好用
- 大型项目中有功能复杂的组件 不容易看懂
- Composition API 容易拆分 易于复用

#### 介绍
- 基于函数的 API
- 可以灵活的组织组件的逻辑
- 容易提取可复用的逻辑
- 也可以把某些方法提取出来方便其他组件复

### 性能提升
- 响应式系统升级
    - 使用 Proxy对象 可以检测到 del 数组索引 和 length

- 编译优化
    - Vue 2.0 通过标记静态根节点 优化 diff 算法
    - Vue 3.0 标记和提升所有的静态根节点, diff 的时候只需要对比动态节点的内容
        - 静态节点会提升到 reander 函数的外层 
    - Vue 3.0 引入 Fragments (文档碎片) 组件中不需要唯一的根元素

- 优化了打包体检
    - 移除 inline-template filter 等
    - 内置组件就实现了 tree-shaking 比如 keep-alive  没有使用 就不会引入


### Vite
- 开发模式不需要打包 因为他使用了 浏览器原生支持的 ESM
- 快速冷启动 (.vue 文件 交给服务器处理)
- 按需编译
- 模块热更新
- Vite 在生产环境下使用 Rollup 打包
    - 基于 ESM 所以不需要 babel 把  import 转换成 require  打包的体积更小

#### Vite 使用
- 可以直接创建 vue3.0 的项目
- 可以基于模板 创建 react 项目等




