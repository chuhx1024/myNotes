const { SyncLoopHook } = require('tapable')
// 这钩子就是按顺序执行的 可以处理 高内聚 低耦合的逻辑
// 循环钩子的含义
// 
let hook = new SyncLoopHook(['name', 'age'])

let count1 = 0
let count2 = 0
let count3 = 0

hook.tap('fn1', (name, age) => {
    console.log('fn1--->', name, age)
})
hook.tap('fn2', (name, age) => {
    console.log('fn2--->', name, age)
    if ( ++count2 === 5) {
        return undefined
    }
    return true
})
hook.tap('fn3', (name, age) => {
    console.log('fn3--->', name, age)
})

hook.call('aaa', 18)
/*
 *  fn1---> aaa 18
 *  fn2---> aaa 18
 *  fn1---> aaa 18
 *  fn2---> aaa 18
 *  fn1---> aaa 18
 *  fn2---> aaa 18
 *  fn1---> aaa 18
 *  fn2---> aaa 18
 *  fn1---> aaa 18
 *  fn2---> aaa 18
 *  fn3---> aaa 18 
 */

// 根据执行结果可以分析出 只要 fn2 的执行结果返回 true  就会再从头走一遍  所以 fn1 也被动的执行了很多次