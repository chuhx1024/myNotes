# CompositionAPI

### 概念

#### setup 函数
```js
import { onMounted } from 'vue'
setup () {
    // 第一个参数 props : 接收外部传来的参数 是一个响应式对象  不能解构
    // 第二个参数 context : 三个成员 attrs emit slots
    // 返回的对象 可以在模板中使用  
    // 执行时机  props 解析完毕 组件被创建之前执行 无法使用 this(undefined) 获取到组件的实例 无法访问组件的 data  computerd
    const position = {
        x: 0,
        y: 0,
    }
    // 在 setup 中使用生命周期
    onMounted (() => {

    })
    return { 
        position
    }
}
```

### toRefs, reactive,  ref

- ref 把普通类型转换为响应式
```js
const count = ref(0)
```
- reactive 把对象 转换为响应式  但是对象 不能解构  解构了 就不是响应式了
```js
const position = reactive({
    x: 0,
    y: 0,
})
```

- refs 接收 reactive 转换后的对象  返回一个支持解构的 
```js
const position = reactive({
    x: 0,
    y: 0,
})
const ccc = refs(position)
```
### 计算属性
```js
const position = reactive({
    x: 0,
    y: 0,
})

const comX = computed(() => {
    return position.x + 1
})

```

### 监听器 Watch
- 三个参数
    - 第一个参数: 要监听的数据
    - 第二个参数: 回调
    - 第三个参数: 选项对象 deep immediate

- 返回值: 取消监听的函数 (是一个函数可以直接调用)
```js
const ccc = ref('')
watch(ccc, (newval, oldVal) => {
    console.log(123)
})
```

### watchEffect 就是 watch 的简化版本
- 接收一个函数作为参数, 监听函数内响应式数据的变化
```js
const ccc = ref('')
const stop = watchEffect(() => {
    console.log(ccc.value)
})
```