# CommonJS AMD CMD ES6 模块规范
## 前言
- 为什么要有模块化
    - 随着技术的发展，各种前端库层出不穷，前端代码日益膨胀。如果不对前端代码加以模块化规范去管理，维护将变得异常困难
- 什么是模块
    - 对于一个复杂的程序，将其按照一定的规范封装成几个文件块，每一块向外暴露一些接口，块的内部数据是私有的，块与块之间通过接口通信。这个过程称为模块化，而文件块称为模块。
- 模块化的好处
    - 减少全局变量污染
    - 提高了可复用性
    - 代码更易维护
    - 模块分离可以实现按需加载
    - 一定程度上减少了http请求的数量
## 一下是四种主流模块化规范 ⬇️

## 1. CommonJS 
### 1.1 概述
- Node 应用由模块组成 采用 CommonJS 模块规范
- 每个文件都是一个模块 有自己的作用域 在一个文件里定义的变量 函数 类 都是私有的 对其他文件不可见
```js
// example.js
var x = 5 
var addX = function (val) {
    return val + x
}
```
- 上面的代码中 x 和函数 addX, 是当前文件 example.js 私有的 其他文件不可见
- 如果想在多个文件分享变量 必须定义为 global 对象的属性
```js
global.warning = true // 这样可以被所有的文件读到 但是不推荐这种写法
```

### 1.2 export 和 require 用法
- CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。
```js
var x = 5
var addX = function (val) {
    return val + x
}
module.exports.x = x
modele.exports.addX = addX
```
- 上面代码通过module.exports输出变量x和函数addX。
- require 方法用于加载模块
```js
var example = require('./example.js')
console.log(example.x)       // 5
xonsole.log(example.addX(1)) // 6
```

### 1.2.1 module.exports 和 exports 的区别
- exports只能使用语法来向外暴露内部变量：如http://exports.xxx = xxx;
- module.exports既可以通过语法，也可以直接赋值一个对象。
- exports和module.exports其实是一个东西，
```js
console.log(module.exports === exports); // true
```
- exports 就是 module.exports 的一个引用

### 1.3 CommonJS 模块的特点
- 所有的代码运行在模块作用域内, 不会污染全局
- 模块可以多次加载, 但是只会在第一次加载时运行一次 然后运行结果就缓存了 以后再加载, 就可以直接读取缓存的结果
- 模块加载的顺序，按照其在代码中出现的顺序。
```js
// a.js
module.exports.a = 10

// b.js
let a = require('./a.js')
a.a = a.a + 10
console.log(a, 'b')

// c.js
let a = require('./a.js')
a.a = a.a + 10
console.log(a, 'c')

// d.js
let a = require('./a.js')
require('./b.js')
require('./c.js')
console.log(a, 'd')
// { a: 20 } b
// { a: 30 } c
// { a: 30 } d
```
### 1.4. node 中模块的加载策略
- 以 const template = require(‘art-template’) 为例：
     
    1. 先找到当前文件所处目录中的 node_modules 目录

    2. 然后根据art-template 中的 package.json 找到文件中的 main 属性

    3. main 属性中就记录了 art-template 的入口模块

    4. 然后加载使用这个第三方包，但是实际上最终加载的还是文件

    5. 如果 package.json 文件不存在或者 main 指定的入口模块是也没有

    6. 则 node 会自动找该目录下的 index.js，也就是说 index.js 会作为一个默认备选项

    7. 如果以上所有任何一个条件都不成立，则会进入上一级目录中的 node_modules 目录查找

    8. 如果上一级还没有，则继续往上上一级查找

    9. 如果直到当前磁盘根目录还找不到，最后报错： can not find module xxx

## 2. AMD 规范
## 2.1 概述
- AMD全称为Asynchronous Module Definition，是异步加载模块的，允许指定回调函数。
- 由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不需要异步加载，所以CommonJS规范比较适用。
- 但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用异步模式，因此浏览器端一般采用AMD规范。

## 2.2 基本语法
- 定义模块
```js
define(id?, dependencies?, factory);

　　id: 模块名

　　dependencies: 依赖的模块，如果缺省，默认为 ["require", "exports", "module"]

　　factory: 模块工厂，通过排列组合这种模块定义能满足很多场景的需求
```
## 2.3 简单案例
```js
// 定义
define({
    provinces: [
        {
            name: ‘上海’,
            areas: [‘浦东新区’, ‘徐汇区’]
        },{
            name: ‘江苏’,
            cities: [‘南京’, ‘南通’]
        }，
        // ......
    ]
});

// 使用 
// 假设这个文件名为china.js，那么如果某个模块需要这个数据，只需要：
define([‘china’, function(china){
    //在这里使用中国省市数据
});

```

## jquery是如何做的？
```js
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
    define("jquery", [], function () { return jQuery; } );
}

define.amd = {
    jQuery: true
}; 
```

## 3.0 CMD 规范

## 3.1 概述
- CMD(Common Module Definition)，通用模块定义。CMD是SeaJS 在推广过程中对模块定义的规范化产出。因此与AMD类似的，
- 在使用CMD时，也需要引入第三方的库文件 ---- SeaJS。
## 3.2 语法
```js
// 定义
define({'website':'oecom'});
define('这里是OECOM');
// 使用 
define(function(require,exports,module){

})

```

## 3.3 同步加载
```js
define(function(require,exports,module){
    var a = require('./a');
    a.out();//假设模块a有out方法。
})
```
## 3.4 异步加载
```js
define(function(require,exports,module){
    require.async('./a',function(a){
        a.doSomething()
        })
        require.async(['./c','./b'],function(c,b){
        c.doSomething()
        b.doSomething()
        })
    })
}
```

## 4.0 ES6 模块
## 4.1 概述
- 在ES6之前，社区制定了一些模块加载方案，最主要的有CommonJS和AMD两种。前者用于服务器，后者用于浏览器。
- ES6在语言规格的层面上，实现了模块功能，而且实现得相当简单，完全可以取代现有的CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案。
- ES6模块是一个非常强大的概念。尽管目前还没有任何地方都提供支持，但是您可以使用ES6代码并将其转换为ES5。
- ES6 Module Transpiler是一个工具，它将您的ES6模块编译成CommonJS或AMD风格的ES5兼容代码。
- ES6模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系（这种加载称为“编译时加载”），以及输入和输出的变量。
- CommonJS和AMD模块，都只能在运行时确定这些东西。

## 4.2 语法
```js
// test.js
let info = {
    name: 'zs',
    age: 20
}
export default info
 
export let title = '小星星'
 
export let content = '哈哈哈'
```
```js
// mian.js  在main.js中接收，test.js使用export default 和 export 向外暴露的成员
import person, {title, content as content1} from './test.js'
console.log(person)    // 其实就是test.js 中的 info 因为是默认导出 可以用任意名字接收
console.log(title)     // 其实就是test.js 中的 title
console.log(content1)  // 其实就是test.js 中的content 注意对应关系

```



## 总结
- CommonJS规范主要用于服务端编程，加载模块是同步的，这并不适合在浏览器环境，因为同步意味着阻塞加载，浏览器资源是异步加载的，因此有了AMD、CMD解决方案。
- AMD规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。不过，AMD规范开发成本高，代码的阅读和书写比较困难，模块定义方式的语义不顺畅。
- CMD规范与AMD规范很相似，都用于浏览器编程，依赖就近，延迟执行，可以很容易在Node.js中运行。但是依赖SPM打包，模块的加载逻辑偏重。
- ES6在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代CommonJS和 CMD规范，成为浏览器和服务器通用的模块化解决方案。