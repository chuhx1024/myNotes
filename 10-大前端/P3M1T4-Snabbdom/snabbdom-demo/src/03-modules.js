// 1. 导入模块
import { init, h, styleModule  } from "snabbdom"

// 注册模块
const patch = init([styleModule])

// 使用模块
let vnode = h('div#container.cls', { style: { color: "pink" } }, 'Hello world')

let app = document.querySelector('#app')

let newVnode = patch(app, vnode)

console.log(newVnode)

