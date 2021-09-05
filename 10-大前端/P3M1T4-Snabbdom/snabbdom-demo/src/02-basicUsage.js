import { init, h } from "snabbdom"

// 初始化patch 函数 diff 实现 
const patch = init([])

// h 函数是创建 虚拟dom
// <div id="container" class="cls">
//     <h1>hello h1</h1>
//     <p>我是p标签</p>
// </div>
let vnode = h('div#container.cls', [
    h('h1', 'hello h1'),
    h('p', '我是p标签'),
])

let app = document.querySelector('#app')

// 对比新旧 dom  开始替换
// 返回值 可以接收  是对比后的 虚拟dom
let oldNode = patch(app, vnode)

// 模拟服务端渲染
setTimeout(() => {
    vnode = h('div#container.cls', [
        h('h1', 'hello h1--服务端数据'),
        h('p', '我是p标签--服务端数据'),
    ])
    patch(oldNode, vnode)
}, 2000)

// 3秒后 清除内容
setTimeout(() => {
    // h 创建 空节点
    vnode = h('!')
    patch(oldNode, vnode)
}, 3000)
  