class MiniVue {
    constructor (options) {
        // 记录传入的参数
        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
        this._proxyData(options.data)

        // 创建 observer 对象
        new Observer(options.data)

        // 编译模板
        new Compiler(this)
    }
    // 2. 变量data 中的属性 设施 getter/setter
    _proxyData (data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable:  true,
                get () {
                    return data[key]
                },
                set (newVal) {
                    if (newVal === data[key]) return
                    data[key] = newVal
                }
                
            })
        })
    }
}