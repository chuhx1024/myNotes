# CompositionAPI

### 概念

#### setup 函数
```js
setup () {
    // 第一个参数 props : 接收外部传来的参数 是一个响应式对象  不能解构
    // 第二个参数 context : 三个成员 attrs emit slots
    // 返回的对象 可以在模板中使用  
    // 执行时机  props 解析完毕 组件被创建之前执行 无法使用 this(undefined) 获取到组件的实例 无法访问组件的 data  computerd
    const position = {
        x: 0,
        y: 0,
    }
    return { 
        position
    }
}
```
