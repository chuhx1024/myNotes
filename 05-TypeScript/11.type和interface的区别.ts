// 语法
// type

type Person88 = {
    name: string
    age: number
}
type MyEle = string | number

interface Person77 {
    name: string
    age: number
}

// 区别一: type 可以定义任意类型   interface 只能定义对象类型

// 区别二: interface 同名会合并  type 不会也不能同名

// 区别三: interface 可以继承  type不能


// type 没有继承  但是 可以使用交叉类型 实现同样的效果

type Ccc = {
    name: string
}

type Ccc1 = {
    age: number
} & Ccc

let xiaoming0: Ccc1 = {
    name: 'xiaoming',
    age: 18
}


