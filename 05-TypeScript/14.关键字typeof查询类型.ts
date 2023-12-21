const zhagnsanFather = {
    a: {
        b : {
                c: 123
            }
        }
}
// ts 的 typeof  一般用于 定出一个 type  给 其他 属性用  它的返回值是 zhagnsanFather 一样的类型 可以让 interface 相同的对象用
const zhangsanSon: typeof zhagnsanFather = {
    a: {
        b : {
                c: 123666
            }
        }
} 

// js 的typeof  是 判断 值的类型 返回值是: 'string' 'number' 'function' 'object' 'undefiend'
console.log( typeof zhagnsanFather)
