# Webpack 源码分析

### 关于打包后的文件
- 打包后的文件就是一个函数的自调用, 传入的是一个对象
- 这个对象我们为了方便将之成为模块定义, 他就是一个键值对 
- 键是 js 文件名 值 还是一个函数 函数体 就是我们 js 的内容
- 这个函数在将来的某个时间点上会被调用 同时会接收一定的参数 利用这些参数 就可以实现模块的加载操作
- 打包后的文件 就相当于 把 {} 传递给了 modules


### Webpack 的懒加载实现原理
- import() 方法可以实现
```js
// /*webpackChunkName: 'login'*/ 可以实现自定义 打包 文件

import(/*webpackChunkName: 'login'*/'./login.js').then(login => {  
    console.log(login)
})
```
- 核心原理就是利用了 jsonp

- 核心方法  __webpack_require__.t 方法
    - 有个好用的语法 (mode & 1) 

```js
    /*  
    *   t 方法内部就做了一件事  就是调用自定义 的 require 方法加载 value 对应模块导出 重新赋值给 value
    *   t 方法接受参数 value 就是 当前要懒加载的模块ID  mode 就是一个二进制值
    *   里边的 8 4 ns 2  都是不同的情况 对 value 的加工处理
    *   (mode & 1) 和 (mode & 8) 成立时  就直接返回 value 此时就是默认的  CommonJS 规范的导出
    *   (mode & 1) 和 (mode & 4) 成立时  就直接此时就是 ESM 规范的导出
    *   上述都不成立 就要 用 ns 的相关加工了
    *       - 如果是普通的 String  就直接挂载
    *       - 如果是 Object  就要使用 循环的方式挂载了
    * 
    */
	__webpack_require__.t = function(value, mode) {
 		if(mode & 1) value = __webpack_require__(value)

 		if(mode & 8) return value

 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) {
            return value
         }

 		var ns = Object.create(null)
 		__webpack_require__.r(ns)
 		Object.defineProperty(ns, 'default', { enumerable: true, value: value })
 		if(mode & 2 && typeof value != 'string') {
            for(var key in value) {
                __webpack_require__.d(ns, key, function(key) { 
                    return value[key] 
                }.bind(null, key))
            }
        }
 		return ns
 	}

```





