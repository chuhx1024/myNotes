(function (modules) {
    console.log(modules)
    // 定义一个对象缓存加载过的模块
    let installedModules = {}
    // 定义一个 __webpack_require__ 方法来替换 import require 加载操作
    function __webpack_modules__ (moduleId) {
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
        modules[moduleId].call(module.exports, module, module.exports, __webpack_modules__)
        // 先标记 module 被调用了
        return module.exports

    }
    // 在 __webpack_modules__ 上定义 m 属性 保存 modules
    __webpack_modules__.m = modules
    // 在 __webpack_modules__ 上定义 c 属性 cache
    __webpack_modules__.c = installedModules
    // 定义 o 方法 判断对象身上是否存在指定的属性
    __webpack_modules__.o = function (object, property) {
        return Object.prototype.hasOwnProperty(object, property)
    }
    // 定义一个d 方法 用于在对象的 身上添加添加一个属性 同时给这个属性提供一个 gertter 方法
    __webpack_modules__.d = function (exports, name, getter) {
        if(!__webpack_modules__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter,
            }) 
        }
    }
    // 定义一个 r 方法 用来标记是 ES6 类型
    __webpack_modules__.r = function () {
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
    __webpack_modules__.n = function (module) {
        let getter = module && module.__esModule ?
            function getDefault () { return modeule['default']} : 
            function getModuleExports () { return module }
        __webpack_modules__.d(getter, 'a', getter)
        return getter
    }

    //  保存资源得访问路径 如果没有设置 就是 ''
    __webpack_modules__.p = ''

    // 调用一下
    return __webpack_modules__(__webpack_modules__.s = './src/index.js')
})
(
    {
        "./src/index.js":
        (function(module, exports, __webpack_require__) {
        
            const obtn = document.querySelector('#btn')
            console.log('我是index.js 的内容')
            obtn.addEventListener('click', () => {
                __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./login.js */ "./src/login.js", 7)).then(login => {
                    console.log(login)
                })
            })
        })
    }
)