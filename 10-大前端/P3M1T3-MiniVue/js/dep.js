class Dep {
    constructor () {
        // 存储所有的观察者
        this.subs = []
    }
    // 添加观察者
    addSub (sub) {
        if (sub && sub.update) {
            this.subs.push(sub)
        }
    }
    // 发送通知
    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

// 这个类的作用是收集依赖和发送通知
// 这就需要给每一个响应式数据 创建这个类
// 所以就要在 observe.js 的 getter 中创建 在使用数据时 收集依赖  在设置数据时(setter) 调用通知 