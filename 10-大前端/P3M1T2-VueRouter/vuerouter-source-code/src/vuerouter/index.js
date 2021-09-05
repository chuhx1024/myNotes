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
                    this.$options.router.init()
                }
            },
        })
    }
    constructor (options) {
        this.options = options
        this.routeMap ={}
        this.data = _Vue.observable({
            current: window.location.pathname
        })

    }
    init () {
        this.createRouteMap()
        this.initComponents(_Vue)
        this.initEvent()
    }
    
    createRouteMap () {
        // 遍历 new 时 传入的所有路由规则 转换成 键值对的形式 存储到Routemap
        this.options.routes.forEach( route => {
            this.routeMap[route.path] = route.component
        })
    }
    
    initComponents (Vue) {
        const self = this
        Vue.component('router-link', {
            props: {
                to: String,
            },
            // template: '<a :href="to"><slot></slot></a>'
            render (h) {
                return h('a', {
                    attrs: {
                        href: this.to
                    }, 
                    // 给 router-link 绑定点击事件
                    on: {
                        click: this.clickhandler
                    },
                }, [this.$slots.default])
            },
            methods: {
                clickhandler (e) {
                    history.pushState({}, '', this.to)
                    this.$router.data.current = this.to
                    console.log(window.location)
                    e.preventDefault()
                }
            }

        })
        Vue.component('router-view', {
            render(h) {
                const component = self.routeMap[self.data.current]
                return  h(component)
            }
        })
    }
    // 注册 popstate 事件 监听 地址栏 路径的变化
    initEvent () {
        window.addEventListener('popstate', () => {
            this.data.current = window.location.pathname
        })
    }
}