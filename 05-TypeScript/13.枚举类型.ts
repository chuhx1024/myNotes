enum Gender {
    Nan = 1,
    Nv = 0
}

function getP (m: Gender) {
    console.log(m)
}

getP(Gender.Nan)
getP(1)
getP(0)
// getP(100)  这个是不允许的会报错


// 说明: 枚举类型 既可以做 类型 也可以作为值 传递给 函数做参数


console.log("--------------")

// 枚举的类型 
// 1. 数字枚举 会自增
// 2. 文字枚举

enum OrderState0 {
    Daifukan = 0,
    Yifukan = 1,
    Daifabu = 2,
    Yifabu = 3,
}

enum OrderState1 {
    Daifukan,
    Yifukan,
    Daifabu,
    Yifabu,
}

enum OrderState2 {
    Daifukan,
    Yifukan,
    Daifabu = 13,
    Yifabu,
}



console.log(OrderState0.Daifukan) // 0
console.log(OrderState0.Yifukan) // 1
console.log(OrderState0.Daifabu) // 2
console.log(OrderState0.Yifabu) // 3   

console.log("--------------")

console.log(OrderState1.Daifukan) // 0
console.log(OrderState1.Yifukan) // 1
console.log(OrderState1.Daifabu) // 2
console.log(OrderState1.Yifabu) // 3  // 所以说 它们是自增的 从 0 开始

console.log("--------------")

console.log(OrderState2.Daifukan) // 0
console.log(OrderState2.Yifukan) // 1
console.log(OrderState2.Daifabu) // 13
console.log(OrderState2.Yifabu) // 14   // 所以说 定义了一个 还是自增的 注意规律


// 字符串枚举

enum Dirction {
    Up = 'UP',
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}