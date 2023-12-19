
/*
名称: 类型别名
作用: 自定义类型 就是类型的封装
语法: type 关键字
使用场景: 类型需要复用时 
推荐写法: 大驼峰
*/

type CustomArr = (number | string) []

const arr10: CustomArr = [1,3,'123']
let arr99: CustomArr = [1,3,'123', 99]



// 也可以局部使用
type MyElement = number | string
let arr90: MyElement[] = [1,3,'123']


// 定义函数类型

type MyFunc = (a: number, b: string) => string

let fn : MyFunc = (a, b) => {
    return a + b
}

fn(1, '2')