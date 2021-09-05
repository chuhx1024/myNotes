class Watcher {
    constructor (vm, key, cb) {
        this.vm = vm
        this.key = key
        this.cb = cb

        // Watcher 实例化的时候 要把自己记录在 Dep 的静态属性上
        Dep.target = this

        this.oldVal = vm[key]
        // 因为 this.oldVal = vm[key] 已经触发了 data 的 getter  添加依赖的事情做完了 就可以给 Dep.target 置为 null 等待新一轮的挂载
        Dep.target = null
    }

    update () {
        let newVal = this.vm[this.key]
        if (this.oldVal === newVal) return
        this.cb(newVal)
    }
}