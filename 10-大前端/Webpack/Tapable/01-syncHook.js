const { SyncHook } = require('tapable')
// 这钩子就是按顺序执行的 可以处理 高内聚 低耦合的逻辑
let hook = new SyncHook(['name', 'age'])

hook.tap('fn1', (name, age) => {
    console.log('fn1--->', name, age)
})
hook.tap('fn2', (name, age) => {
    console.log('fn2--->', name, age)
})

hook.call('aaa', 18)