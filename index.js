// 高阶函数作为返回值

// 基本语法
function makeFn () {
    let msg = "hello world"
    return function () {
        console.log(msg)
    }
}

// 调用
makeFn()()   // hello world

// 实现 once 函数 就是轮播图里的 锁 lodash中的 once 函数 
// 使用场景 支付 

function once (fn) {
    let done = false
    return function () {
        if (!done) {
            done = true
            fn(...arguments)
        }
    }
}

let pay = once(function(money){
    console.log(money)
})
pay(4)   // 4 // 只会执行一次
pay(4)   // 核心代码不执行
