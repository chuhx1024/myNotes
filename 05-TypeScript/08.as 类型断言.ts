// 类型断言
// 使用场景: 当ts 推断的类型不准确的时候使用 as
// 语法
interface Cat {
    name: string
    run(): void
}
interface Fish {
    name: string
    swin(): void
}
function isFish (animal: Cat | Fish ) {
    if ( typeof (animal as Fish).swin === 'function' ) {
        return true
    }
    (animal as Fish).swin()
    return false
}
console.log(isFish({name: '111', swin: function(){console.log(123)}}))

// console.log(isFish({name: '111', run: function(){console.log(123)}}))  // 编译是断言了 不会报错 但是运行时 没有 swin 就报错了

//


type Profile = {
    name: string,
    age: number,
    token: string,
}

let profile = {} as Profile  // 这样就可以定义空对象  但是提前定义好类型

// 使用场景  如果此时 不用 as  aNode 可能为 null  就无法赋值  href  
// 如何获取  a 的类型就是 HTMLAnchorElement ?
// 1. const aNode = document.querySelector("a") 鼠标放上去 就有了
const myA = document.querySelector("a")
const aNode = document.querySelector("#app") as HTMLAnchorElement
aNode.href = '123'