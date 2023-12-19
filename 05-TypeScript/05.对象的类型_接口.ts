// 在 TS 中 使用接口(interfaces)来定义对象的类型
// 什么是接口
interface Person {
    name: string
    age: number
}
// 赋值的时候，变量的形状必须和接口的形状保持一致。
let tom: Person = {
    name: '小明',
    age: 18,
    // gender: '男'  // 不可定义  因为接口中没有定义
}
console.log(tom)

// 可选属性
// 有时我们希望不要完全匹配一个形状 可是使用可选属性
interface Person0 {
    name: string
    age?: any
}
let tony: Person0 = {
    name: '托尼'
}
let jack: Person0 = {
    name: '杰克',
    age: 18
}

// 任意属性
interface Person1 {
    name: string
    age: number
    [ propName: string ]: any
}
let lily: Person1 = {
    name: '丽丽',
    age: 18,
    gender: '女'
}

// 注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface Person2 {
    name: string
    age: number
    gender: boolean
    [propName: string]: string | number | boolean
}
let lucy: Person2 = {
    name: '路西',
    age: 19,
    gender: true,
    abc: 123,
    // ddd: null
}
// 只读属性

interface Person3 {
    readonly id : number
    name: string
    age?: number
    [propName: string]: any
}

let lily1:Person3  = {
    id: 23,
    name: 'lily',
    age: 18,
}
// lily1.id = 23 无法分配到 "id" ，因为它是只读属性。


// 对象中设置方法

type  Person4 = {
    name: string;
    age: number;
    sayHi0 (name: string): void,
    sayHi1: (name: string) => void,
    sayHi2: (name: string) => void,
    sayHi3: (name: string) => void,
}

const zhangSan: Person4 = {
    name: 'zhangsan',
    age: 18,
    /** 箭头函数写法 */
    sayHi0: (name) => {
        console.log(name)
    },
    // es6 省略写法
    sayHi1 (name) {
        console.log(name)
    },
    // 常规写法
    sayHi2 : function (name) {
        console.log(name)
    },
    // 常规写法
    sayHi3 : function ccc (name) {
        console.log(name)
    }

}

zhangSan.sayHi0('1')
zhangSan.sayHi1('2')
zhangSan.sayHi2('3')
zhangSan.sayHi3('4')


// 也可以在内部给 方法 直接定义
const lisi = {
    name: 'lisi',
    sayHi: (name: string): void => {
        console.log(name)
    } 
    sayHi1: (name: string): void => {
        console.log(name)
    } 
}

lisi.sayHi('lisi hello')