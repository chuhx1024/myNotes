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
                    console.log(this, 'vue实例')
                    console.log(this.$options.router, 'vue实例上参数')
                    console.log(this.$router, 'vue 实例上没有$router')
                    _Vue.prototype.$router = this.$options.router
                    console.log(this.$router, '挂载了$router')
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
                    // window.history.pushState(state, title, url)
                    // state：一个与添加的记录相关联的状态对象
                    // title：新页面的标题。但是，现在所有浏览器都忽视这个参数，所以这里可以填空字符串。
                    // url：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址
                    history.pushState({}, '', this.to)
                    // 为了给路由实例中记录数据 
                    this.$router.data.current = this.to
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