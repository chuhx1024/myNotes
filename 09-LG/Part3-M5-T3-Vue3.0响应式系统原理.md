# Vue3.0 响应式系统

### 概述
- 性能更好
    - 使用 Proxy 对象实现属性监听 不用使用变量的方法 设置 defineProporty
    - 多层嵌套的属性 在访问属性的过程中处理下级属性  不用递归了 
- 默认监听动态添加的属性
- 默认监听数据的删除操作
- 默认监听数据的索引和 length 属性
- 可以单独当做模块使用

### 核心方法
- reactive/ref/toRefs/computed
- effect(watch)
- track(收集依赖函数)
- trigger(触发更新函数)

### 回顾 Proxy 对象
- get set deleteProperty 中的 recevier 是 解决 代理对象的 this 问题
```js
'use strict'
const obj = {
    foo: 123,
    bar: 999,
}

const proxy = new Proxy(obj, {
    get (target, key, receiver) { // get 参数中 的 reveiver 是 指向 proxy 对象
        return Refect.get(target, key, recevier)
    },
    set (target, key, value, receiver) {
        Refect.set(target, key, value, receiver)
    },
    deleteProperty (target, key) {
        Refect.deleteProperty(target, key)
    }
})
```

### reactive 
- 接收一个参数 判断这个参数是否是对象 如果不是直接返回 它只能把对象转换成响应式对象 (和 ref 不同)
- 创建连接器对象 handler, 设置 get/set/deleteProperty
- 返回 代理对象 proxy
- 函数实现
```js
// 辅助函数
// 判断是不是对象
const isObject = val => val !== null && typeof val === 'object'
// 判断是不是对象 是 重新递归 reactive
const convert = target => isObject(target) ? reactive(target) : target
// 判断一个对象是不是有指定的属性
const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (target, key) => hasOwnProperty.call(target, key)

export function reactive(target) {
    if (!isObject(target)) return target

    const handler = {
        get(target, key, receiver) {
            // 收集依赖
            console.log('get', key)
            const result = Reflect.get(target, key, receiver)
            // 如果返回值是对象 就要重新收集依赖 使用递归
            return convert(result)
        },
        set(target, key, value, receiver) {
            const oldVal = Reflect.get(target, key, receiver)
            const result = true
            if (oldVal !== value) {
                result Refect.set(target, key, value, receiver)
                // 触发更新
            }
            return result
        },
        deleteProperty(targer, key) {
            const hadkey = hasOwn(target, key)
            const result = Reflect.deleteProperty(target, key)
            if (hadkey && result) {
                // 说明删除成功 触发更新
            }
            return result
        }
    }
    return new Proxy(target, handler)
}

```
```js
// 测试方法
<script type="module">
import { reactive } from './index.js'
const obj = reactive({
    name: 'sss',
    age: 18
})
obj.name = 'jim'
delete obj.age
</script>
```
### 依赖收集和触发更新
```js
import { reactive, effect } from 'vue'
const product = reactive({
    name: 'iphone',
    price: 5000,
    count: 3, 
})
let total = 0
effect(() => {
    // 这里调用  product.price 会触发 price 中的 get 收集依赖记录 key  和这个 effect 函数 作为回调函数
    // 当 price 改变的时候 就会触发 price中的 set 然后触发更新 就是执行get 中记录的 effect函数
    // 这样就实现了 监听
    total = product.price * product.count
})
```
- 实际的收集依赖的思路
    - targetMap 字典 (目标对象)
    - depsMap 字典  (目标对象的属性名)
    - dep new Set() (effect 函数)

### 实现 effect 函数
```js
export function effect (callback) {
    callback() // 访问响应式对象属性, 去收集依赖

}
```

### 实现 ref 函数
- 接收一个参数 可以是原始值 可以是对象
- 如果是对象 而且是 ref 创建的对象 直接返回
- 如果是普通对象 会调用 reactive 创建响应式对象
- 如果是 原始值 会创建一个具有 value 属性的 响应式对象
```js
export function ref (raw) {

}
```

### ref 和 reactive 区别
- ref 可以把基本数据类型转换成响应式对象 使用时  .vaule  在模板中可以省略 .value
- ref 返回的对象 重新赋值也是响应式的
- reactive 不能处理基本数据类型 只能处理对象  返回的对象重新赋值失去响应式
- reactive 返回的对象 解构失去响应式
- 使用场景选择
    - 如果一个对象中成员很多 使用 ref 很不方便  因为要 .value
    - 如果只用一个响应式数据 使用哦 ref 很方便 可以直接解构返回

### toRefs 
- 接收一个 reactive 处理过的响应式对象
- 如果不是reactive 创建的对象 直接返回 再把这个对象 转成 reative 转换后的对象
- 如果是参数是一个数据 创建一个响应式的数组
- toRefs 是把 reactive 创建的对象的所有属性都转换成一个对象 所以解构出来的也是对象 是引用类型 所以也是 响应式的

### computed 实现
- 接收一个有返回值的函数 作为参数
- 这个返回值就是计算属性的值
- 要监听这个函数内部使用的 响应式数据的变化 最后把这个函数执行的结果返回
```js
export function computed (getter) {
    const result = ref()
    // 赋给了 result.value 就会监听 getter内部响应式数据的变化
    effect(() => result.value = getter())
    return result

} 
```










