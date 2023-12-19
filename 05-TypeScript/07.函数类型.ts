// 1. 函数的类型
// 1.1 函数声明
function sum (x, y) {
    return x + y
}
// 1.2 函数表达式
let mySum = function (x, y) {
    return x + y
}

// 2. ts形式的 函数
// 2.1 ts 函数声明
function tsSum (x: number, y: number): number {
    return x + y
}
// 2.2 ts 函数表达式
let tsMySum = function (x: number, y: number): number {
    return x + y
}
// 上方法是不合理的 左边的tsMySum 是通过赋值操作进行类型推论而推断出来的 实际应该是
let ts0MySum: (x: number, y: number) => number = function (x:number, y: number): number {
    return x + y
}
// 注意不要混淆了 ES6 的箭头函数  :(x: number) => number  // 记忆  括号前有: 箭头后是一个数据类型 而不是 return

// 用接口的形式定义函数

interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1
}

// 可选参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + lastName
    } else {
        return firstName
    }
}

// 注意 可选参数必须放最后

// 参数默认值 
function buildName0(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName
}

// 可选参数 就默认为可选参数了  当然也没有必须放在最后的限制了

// 剩余参数 ES6 语法 ...rest

function push (array: any[], ...items: any[]) {
    items.forEach(item => {
        array.push(item)
    })
}
let a = []
push(a, 1, 2, 3)

// 函数的重载

function reverse (x: string): string
function reverse (x: number): number
function reverse(x: number | string): number | string {
    if(typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}

// 关于  void
// js 中函数 没有返回值  返回值 是 undefined
// ts 中函数 没有返回值  返回值 是 void

function sayHello () :void {
    console.log('hello world')
}