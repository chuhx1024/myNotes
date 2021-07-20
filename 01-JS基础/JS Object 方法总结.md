# Object 常用方法总结

- Object.assign() // 分配对象
demo
```js
const target = { a: 1, b: 2}
const source = { b: 4, c: 5}
const result = Object.assign(target, source) 
console.log(target) // {a: 1, b: 4, c: 5} // 会改变目标对象
console.log(result) // {a: 1, b: 4, c: 5}

// 一次使用多个 source
Object.assign(target, source, source1, source2)

// 应用场景 用一个空目标对象实现 浅拷贝
const copy = Object.assign({}, target) 

// 深拷贝使用
const deepClone = JSON.parse(JSON.stringify(target))
```

- Object.defineProperty() 
```js
// 给 o 提供属性
o.name = '张三';

// 等价于
Object.defineProperty( o, 'name', {
    configurable: true, // 可配置  如果 false 定义 defineProperty 是无效的
    writable: true, // 可以改
    enumerable: true, // 控制属性是否可枚举, 是不是可以被 for-in 取出来 比如对象中的 __proto__ 就是灰色的不能遍历出来 就是设置了 enumerable = false
    value: 张三,
    set() {},  赋值触发
    get() {}   取值触发
} );
```

- Object.defineProperties()
    - 这两个方法的作用是一样的, Object.defineProperty() 只能定义和修改一个属性, Object.definePropeties() 可以同时定义和修改多个属性
```js
let A = {}
Object.defineProperties(A, {
    name: {
        configurable: true, // 可配置  如果 false 定义 defineProperty 是无效的
        writable: true, // 可以改
        enumerable: true, // 控制属性是否可枚举, 是不是可以被 for-in 取出来 比如对象中的 __proto__ 就是灰色的不能遍历出来 就是设置了 enumerable = false
        value: 张三,
        set() {},  赋值触发
        get() {}   取值触发
    },
    age: {
        value: 12,
        configurable: true
    }
})
```

- Object.entries() 返回一个数组, 属性的顺序和手动遍历的顺序相同
```js
const obj = {foo: 'bar', baz: 2}
console.log(obj.entries(obj)) // [['foo', 'bar], ['baz', 2]
```

- Object.freeze() 
    - 此方法可以冻结一个对象 不能修改 不能添加新属性 不能删除已有属性 不能修个已有属性的可枚举性, 可配置性, 可写性, 已经不能修改已有属性的值, 原型也不能修改
    - 返回和传入的参数是同一个对象
```js
const obj = { prop: 9527}

Object.freeze(obj)

obj.prop = 33
// Throws an error in strict mode
```

- Object.is() 判断两个值 是否是相同值
```js
Object.is('foo', 'foo')    // ture
Object.is(window, window)  // ture
Object.is([], [])          // false

const foo = {a: 1}
const bar = {a: 1}
Object.is(foo, bar)        // true

```

- Object.keys // 返回自身可枚举 属性的一个数组
- Object.values // 返回自身可枚举的值
```js

const arr = ['a', 'ab', 'aaa']
console.log(Object.keys(arr)) // ['0', '1', '2']
console.log(Object.values(arr)) // ['a', 'ab', 'aaa']

const obj = {name: '小米', age: 18}
console.log(Object.keys(obj)) // ['name', 'age']
console.log(Object.values(obj)) // ['小米', 18]
```
