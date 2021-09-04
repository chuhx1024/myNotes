
let obj = {
    name: '小明',
    age: 16
}
function abc (ccc) {
    Object.keys(ccc).forEach(key => {
    
        Object.defineProperty(ccc, key, {
            enumerable: true,
            configurable: true,
            get () {
                // 一般以为 这里可以 return obj[key]  但是会循环调用
                return ccc[key]
            },
            set (newVal) {
                if (newVal === val) {
                    return 
                }
                val = newVal
            }
        })
    })
}
abc(obj)
console.log(obj.name)
