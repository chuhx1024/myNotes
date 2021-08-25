const { SyncBailHook } = require('tapable')
// 这钩子就是按顺序执行的 可以处理 高内聚 低耦合的逻辑
let hook = new SyncBailHook(['name', 'age'])

hook.tap('fn1', (name, age) => {
    console.log('fn1--->', name, age)
    // return 1  如果这 return 了数据  fn2 就不执行了
})
hook.tap('fn2', (name, age) => {
    console.log('fn2--->', name, age)
})

hook.call('aaa', 18)