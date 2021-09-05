const compileUtil = {
    text (node, key) {
        node.textContent = this.vm[key]
        new Watcher(this.vm, key, (newVal) => {
            node.textContent = newVal
        })
    },
    model (node, key) {
        node.value = this.vm[key]
        node.addEventListener('input', (val) => {
            this.vm[key] = node.value
        })
        new Watcher(this.vm, key, (newVal) => {
            node.value = newVal
        })
    }
}
class Compiler {
    constructor (vm) {
        this.el = vm.$el
        this.vm = vm
        this.compiler(this.el)
    }
    // 判断属性名是不是指令
    isDirective (attrName) {
        return attrName.startsWith('v-')
    }
    // 判断是不是 字符串
    isTextNode (node) {
        return node.nodeType === 3
    }
    // 判断是不是 元素
    isElementNode (node) {
        return node.nodeType === 1
    }
    // 主函数 遍历 el 按规则解析
    compiler (el) {
        let childNodes = el.childNodes
        // childNodes 是伪数组 想 遍历 使用 Array.from 
        Array.from(childNodes).forEach(node => {
            if (this.isElementNode(node)) {
                this.compileElement(node)
            } else if (this.isTextNode(node)) {
                this.compileText(node)
            }

            // 递归
            if (node.childNodes && node.childNodes.length) {
                this.compiler(node)
            }
        })

    }
    // 解析字符串
    compileText (node) {
        const content = node.textContent;
        // 匹配{{xxx}}的内容
        let reg = /\{\{(.+?)\}\}/
        
        if (reg.test(content)) {
            // 处理文本节点
            // console.log(node.textContent, 123)
            // console.log(RegExp.$1, 12)
            // node.textContent = node.textContent.replace(/\{\{(.+?)\}\}/, (a, $1) => {
            //     // console.log($1., 999)
            //     return this.vm[$1.trim()]
            // })
            node.textContent = node.textContent.replace(reg, this.vm[RegExp.$1.trim()])
            new Watcher(this.vm, RegExp.$1.trim(), (newVal) => {
                node.textContent = newVal
            })
        }
    }

    // 解析元素
    compileElement (node) {
        console.log(node.attributes)
        Array.from(node.attributes).forEach(item => {
            // console.log(item.name)
            let attrName = item.name
            if (this.isDirective(attrName)) {
                // 使用策略模式优化代码
                // 想让 compileUtil 中的 this 指向 MiniVue 实例 所以用了 call
                compileUtil[attrName.split('-')[1]].call(this, node, item.value)
            }
        })

    }

}