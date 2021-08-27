const { SyncWaterfallHook } = require('tapable')
// 这钩子就是按顺序执行的 可以处理 高内聚 低耦合的逻辑
// 瀑布钩子的含义的提现
// 上个函数的 return 就是下个钩子函数的 第一个参数  
let hook = new SyncWaterfallHook(['name', 'age'])

hook.tap('fn1', (name, age) => {
    console.log('fn1--->', name, age)
    return '其实我就是 fn2 的 形参 name'
})
hook.tap('fn2', (name, age) => {
    console.log('fn2--->', name, age)
    return '其实我就是 fn3 的 形参 name'
})
hook.tap('fn3', (name, age) => {
    console.log('fn3--->', name, age)
})

hook.call('aaa', 18)