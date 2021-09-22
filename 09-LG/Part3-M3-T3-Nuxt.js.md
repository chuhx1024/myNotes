# Nuxt.js

### 概念
- 一个基于 Vue.js 生态的 第三方开源服务端渲染框架
- 它可以帮助我们使用 vue.js 的技术栈 构建同构应用

### 关于 asyncData 的使用
- 在组件中使用  和 data 平级
- return的数据 和 data中的数据合并 可以在模板中使用
- 调用时机是 服务端 渲染期间和客户端路由更新以前
- 只能在 page 文件夹的 组件中使用
- 里边没有 this 但是可以从它的上下文中拿到很多有用的数据
```js
export default {
  data() {
    return { project: 'default' }
  },
  asyncData(context) {
    console.log(context)
    return { project: 'nuxt' }
  }
}
```
