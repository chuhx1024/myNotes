export default class VueRouter {
    static install (Vue) {
        // 判断当前插件是否被安装
        if (VueRouter.install.installed) {
            return 
        } else {
            VueRouter.install.installed = true
        }
        // 把Vue 构造函数记录到全局变量
        // 
    }
}