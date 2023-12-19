/**
 * 接口的作用只有一个: 使用 interface 声明对象类型
 */


// 特点一: 同名的 interface 会合并
interface Person1000 {
    name: string
    age?: number
    // 两种定义函数的格式 都是可以的
    sayHi: (name: string) => void
    sayHi0 (name: string): void
}
interface Person1000 {
    name0: string
    
}

const liming : Person1000 = {
    name0: 'liming',
    name: 'liming',
    age: 18,
    sayHi: (name) => {
        console.log(name)
    },
    sayHi0: (name) => {
        console.log(name)
    }
}

// 特点二: interface 可以继承
interface BlackPerson extends Person1000 {
    color: string
}
const xiaoming : BlackPerson = {
    name: '小明',
    name0: '小明',
    age: 18,
    color: 'block',
    sayHi: (name) => {
        console.log(name)
    },
    sayHi0: (name) => {
        console.log(name)
    }
}
