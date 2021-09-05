import { init, h } from "snabbdom"

// 初始化patch 函数 diff 实现 
const patch = init([])

// h 函数是创建 虚拟dom
// <div id="container" class="cls">Hello world</div>
let vnode = h('div#container.cls', 'Hello world')

let app = document.querySelector('#app')

// 对比新旧 dom  开始替换
// 返回值 可以接收  是对比后的 虚拟dom
let newVnode = patch(app, vnode)

console.log(newVnode)

vnode = h('div#container.ccc', 'Hello world3')

patch(newVnode, vnode)
  