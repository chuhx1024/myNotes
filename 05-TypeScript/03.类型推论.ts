// 如果 没有明确的指定类型 那么 ts 会依照类型推论(Type Inference)的规则推断出来
let num = 123
// num = '123' //不能将类型“"123"”分配给类型“number”



// 和 any 要区分开
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;


const btn = document.querySelector('button')
