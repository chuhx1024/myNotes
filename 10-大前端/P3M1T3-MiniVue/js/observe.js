class Observer {
    constructor (data) {
        this.walk(data)
    }

    walk (data) {
        if (!data || typeof data !== 'object') return
        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })
    }

    defineReactive (obj, key, val) {
        // 如果 属性的值也是一个对象 再次调用 walk 设置为响应式
        this.walk(val)
        const that = this
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get () {
                // 一般以为 这里可以 return obj[key]  但是会循环调用 这里还利用了闭包 存储了val
                return val 
            },
            set (newVal) {
                if (newVal === val) {
                    return 
                }
                val = newVal
                // 如果 新赋的值也是一个对象 再次调用 walk 设置为响应式
                that.walk(newVal)
            }
        })
    }
}