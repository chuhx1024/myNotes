(function (modules) {
    console.log(modules)
    	// install a JSONP callback for chunk loading
 	function webpackJsonpCallback(data) {
 		var chunkIds = data[0]
 		var moreModules = data[1]
 		// add "moreModules" to the modules object,
 		// then flag all "chunkIds" as loaded and fire callback
 		var moduleId, chunkId, i = 0, resolves = []
 		for(;i < chunkIds.length; i++) {
 			chunkId = chunkIds[i]
 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
 				resolves.push(installedChunks[chunkId][0])
 			}
 			installedChunks[chunkId] = 0
 		}
 		for(moduleId in moreModules) {
 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
 				modules[moduleId] = moreModules[moduleId]
 			}
 		}
 		if(parentJsonpFunction) parentJsonpFunction(data)

 		while(resolves.length) {
 			resolves.shift()()
 		}

 	}
    // 定义一个对象缓存加载过的模块
    let installedModules = {}
    // 定义一个 __webpack_require__ 方法来替换 import require 加载操作

    let installedChunks = {
        "main": 0
    }
    function __webpack_require__ (moduleId) {
        // 检测当前缓存中是否有有被加载的模块内容 有 就返回 没有 就创建
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }
        let module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        }
        // 核心 执行模块函数
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        // 先标记 module 被调用了
        return module.exports

    }
    // 在 __webpack_require__ 上定义 m 属性 保存 modules
    __webpack_require__.m = modules
    // 在 __webpack_require__ 上定义 c 属性 cache
    __webpack_require__.c = installedModules
    // 定义 o 方法 判断对象身上是否存在指定的属性
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty(object, property)
    }
    // 定义一个d 方法 用于在对象的 身上添加添加一个属性 同时给这个属性提供一个 gertter 方法
    __webpack_require__.d = function (exports, name, getter) {
        if(!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter,
            }) 
        }
    }
    // 定义一个 r 方法 用来标记是 ES6 类型
    __webpack_require__.r = function (exports) {
        if ( typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module',
            })
        }
        Object.defineProperty(exports, '__esModule', {
            value: true,
        })
    }

    // 设置具体的 getter 
    __webpack_require__.n = function (module) {
        let getter = module && module.__esModule ?
            function getDefault () { return modeule['default']} : 
            function getModuleExports () { return module }
        __webpack_require__.d(getter, 'a', getter)
        return getter
    }
    // 懒加载时要用的 方法
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
    __webpack_require__.e = function requireEnsure(chunkId) {
        var promises = []


        // JSONP chunk loading for javascript

        var installedChunkData = installedChunks[chunkId]
        if(installedChunkData !== 0) { // 0 means "already installed".

            // a Promise means "currently loading".
            if(installedChunkData) {
                promises.push(installedChunkData[2])
            } else {
                // setup Promise in chunk cache
                var promise = new Promise(function(resolve, reject) {
                    installedChunkData = installedChunks[chunkId] = [resolve, reject]
                })
                promises.push(installedChunkData[2] = promise)

                // start chunk loading
                var script = document.createElement('script')
                var onScriptComplete

                script.charset = 'utf-8'
                script.timeout = 120
                if (__webpack_require__.nc) {
                    script.setAttribute("nonce", __webpack_require__.nc)
                }
                script.src = jsonpScriptSrc(chunkId)

                // create error before stack unwound to get useful stacktrace later
                var error = new Error()
                onScriptComplete = function (event) {
                    // avoid mem leaks in IE.
                    script.onerror = script.onload = null
                    clearTimeout(timeout)
                    var chunk = installedChunks[chunkId]
                    if(chunk !== 0) {
                        if(chunk) {
                            var errorType = event && (event.type === 'load' ? 'missing' : event.type)
                            var realSrc = event && event.target && event.target.src
                            error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')'
                            error.name = 'ChunkLoadError'
                            error.type = errorType
                            error.request = realSrc
                            chunk[1](error)
                        }
                        installedChunks[chunkId] = undefined
                    }
                }
                var timeout = setTimeout(function(){
                    onScriptComplete({ type: 'timeout', target: script })
                }, 120000)
                script.onerror = script.onload = onScriptComplete
                document.head.appendChild(script)
            }
        }
        return Promise.all(promises)
    }

    // script path function
 	function jsonpScriptSrc(chunkId) {
        return __webpack_require__.p + "" + chunkId + ".built.js"
    }
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || []
 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray)
 	jsonpArray.push = webpackJsonpCallback
 	jsonpArray = jsonpArray.slice()
 	for(var i = 0; i < jsonpArray.length; i++) {
        webpackJsonpCallback(jsonpArray[i])
    }
 	var parentJsonpFunction = oldJsonpFunction

    //  保存资源得访问路径 如果没有设置 就是 ''
    __webpack_require__.p = ''

    // 调用一下
    return __webpack_require__(__webpack_require__.s = './src/index.js')
})
(
    {
        "./src/index.js":
        (function(module, exports, __webpack_require__) {

          const obtn = document.querySelector('#btn')
          console.log('我是index.js 的内容')

          obtn.addEventListener('click', () => {
              __webpack_require__.e("login")
              .then(__webpack_require__.t.bind(null, "./src/login.js", 7))
              .then(login => {
                  console.log(login)
              })
          })
        })
      }
)