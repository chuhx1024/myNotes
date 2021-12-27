# GraphQl

### 概念
- 本质是一种规范  
- 它有很多种实现
    - JS
    - Java

### 类型
- query 
    - 严格来说是一种对象类型
    - 是所有查询的入口点
    - 必须有 且不能重复

- 标量类型
    - Int
    - Float 浮点类型
    - String
    - Boolean
    - ID: 标示唯一性

- 对象类型
```js
type User {
    name: String,
    age: Int,
}
```

