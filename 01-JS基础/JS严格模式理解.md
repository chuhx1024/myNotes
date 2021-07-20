# JS 严格模式理解

## 概述
- 除了正常运行模式, ECMAscript 5 添加了第二种运行模式 "严格模式" (strict mode) , 这种模式使得 JS 在更严格的条件下运行

## 如何使用 (分整个js脚本和单个函数)
- 针对整个脚本文件
```js
//将"use strict"放在脚本文件的第一行，则整个脚本都将以"严格模式"运行。如果这行语句不在第一行，则无效，整个脚本以"正常模式"运行。如果不同模式的代码文件合并成一个文件，这一点需要特别注意。

//(严格地说，只要前面不是产生实际运行结果的语句，"use strict"可以不在第一行，比如直接跟在一个空的分号后面。)

"use strict"
// ...
// ...
```
- 针对单个函数
```js
function fn () {
    "use strict"
    // ...
    // ...
}
```

- 变通写法 因为第一种调用方法不利于文件合并，所以更好的做法是，借用第二种方法，将整个脚本文件放在一个立即执行的匿名函数之中。
```js
(function () {
    'use strict'
    // ...
    // ...
})()
```

## 设立 strict mode 的目的
- 消除 JS 语法的一下不合理 不严谨 减少怪异行为
    - 未声明的变量不能用
    ```js
        "use strict";

    　　v = 1; // 报错，v未声明

    　　for(i = 0; i < 2; i++) { // 报错，i未声明
    　　}
    ```
- 消除代码运行的不安全之处
    - 禁止 this 关键字指向全局对象
    ```js
       　function f(){
    　　　　return !this;
    　　}
    　　// 返回false，因为"this"指向全局对象，"!this"就是false

    　　function f(){
    　　　　"use strict";
    　　　　return !this;
    　　}
    　　// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。 

        function f(){

    　　　　"use strict";

    　　　　this.a = 1;

    　　};

    　　f();// 报错，this未定义
    ```
- 提高编译效率 增加运行速度
    - 禁止使用 with 语法 with语句无法在编译时就确定，属性到底归属哪个对象。运行缓慢 建议不用
    ```js
        "use strict";

    　　var v = 1;

    　　with (o){ // 语法错误
    　　　　v = 2;
    　　}
    ```
- 为未来新版本的 JS 做好铺垫
    - 显式报错
    ```js
        'use strict'
        var o = {}
        Object.defineProperty(o, 'name', {
            value: '小名',
            writable: false
        })
        o.name = '小花' // 直接报错 非严格模式 只会默默的失败
    ```
    - 对象属性重名报错
    ```js
        'use strict'
        var obj = {
            name: 1,
            name: 2
        } // 语法错误

    ```
    - 函数不能有重名的参数
    ```js
        'use stict'
        function fn (a, a, b) {  // 语法错误
            // ...
        }
    ```
