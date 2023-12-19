// 值作为类型 就是 字面量类型


let str = '123' // type string
const str1 = '123'  // type 123


let str3: '小麦' = '小麦'  // type 小麦 只能是 小麦

// 使用场景: 通常和联合类型 配合使用 表示一组可选的取值范围

// 比如 axiox({url: xxxx, method: post })  method  只能是 get post  delete 等 怎么定义出来的?

type Method = 'get' | 'post' | 'put' | 'delete'

function myAxios(m: Method) {

}

myAxios('delete')
myAxios('delete0')  // 直接就报错了  



