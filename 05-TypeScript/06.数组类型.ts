// 数组的类型

// 1. 最简单的表示

let arr0: number[] = [1, 2, 3, 4, 5]
// 此时 .push('12') 肯定也是不能用的

// 2. 数组泛型
 let arr1: Array<number> = [1, 2, 3]

// 3. 用接口表示数组

interface NumberArray {
    [index: number]: number
}
let arr2: NumberArray = [1, 3, 4, 5]

// 4. 类数组

function sum () {
    // let args: number[] = arguments // 类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 24 项。
    let args: IArguments = arguments

    let args0: {
        [index: number]: any
        length: number
        callee: Function
    } = arguments
    console.log(args)
    console.log(args0)
}

// 5. any 在数组中的应用

let arr3: any[] = [12, '123', { name: '小明'}]