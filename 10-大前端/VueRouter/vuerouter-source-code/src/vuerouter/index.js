let _Vue = null
export default class VueRouter {
    static install (Vue) {
        // 1. 判断当前插件是否被安装
        if (VueRouter.install.installed) {
            return 
        }
        VueRouter.install.installed = true
        // 2. 把Vue 构造函数记录到全局变量
        _Vue = Vue
        // 3. 把创建Vue 实例时传入的 Router 对象注入到 VUE 实例上
        // 使用混入
        _Vue.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    console.log(this, 123)
                    console.log(this.$options.router, 123)
                    _Vue.prototype.$router = this.$options.router
                }
            },
        })
    }
    constructor (options) {
        this.options = options
        this.routeMap ={}
        this.data = _Vue.observable({
            current: '/'
        })

    }
    
    createRouteMap () {
        // 遍历 new 时 传入的所有路由规则 转换成 键值对的形式 存储到Routemap
        this.options.routes.forEach( route => {
            this.routeMap[route.path] = route.component
        })
    }
}