// 递归方法
function fn (n) {
    if (n === 1) {
        return 1
    }
    return n*fn(--n)
}
console.log(fn(10))



// 一般方法
const fn1 = (n) => {
    var result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}
console.log(fn1(10), 123)

/**
 * 算法分析:
 * - 虽然第一个看起来更高级 
 * - 第一个 空间复杂度  比较大 每次函数执行都要开辟一个内存空间  
 * - 相比来说 一般方法更好 占用更小的内存
 */