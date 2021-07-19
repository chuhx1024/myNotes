class Compile {
    constructor (el, vm) {
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm
        // 获取文档碎片 放进内存 可以减少 频繁的操作 dom 时的页面重绘
        const fragment = this.node2Fragment(this.el)
        // 编译模板
        this.compile(fragment)



        // 需要 父元素.appendChild(fragment) 才能让页面显示 此方法执行后 f 就又空了 // 类似 粘贴
        this.el.appendChild(fragment) 
    }
    // 判断是不是元素
    isElementNode (node) {
        return node.nodeType === 1  // DOM元素 返回 1 , 字符串 返回 undefined
    }

    node2Fragment (node) {
        const f = document.createDocumentFragment()
        console.log(node, 12)
        console.log(f, '文档碎片')
        while ( node.firstChild ) {
            f.append(node.firstChild) // 可以让元素节点 放进文档碎片中  此时父元素的内容会消失  // 类似 剪切 或者 是 移动
            
        }
        return f
    }
    compile (fragment) {
        const childNodes = fragment.childNodes
        // console.log(childNodes, 999)  // NodeList(15) [text, h2, text, h3, text, ul, text, h3, text, div, text, div, text, input, text]

        ;[ ...childNodes ].forEach(item => {
            // console.log(item)
            if (this.isElementNode(item)) {
                // console.log('元素节点', item)
                this.compileElement(item)
            } else {
                // console.log('文本节点', item)
                this.compileText(item)
            }
            // 
            if (item.childNodes && item.childNodes.length) {
                this.compile(item)
            }
        })
    }
    compileElement (node) {

    }

    compileText (text) {

    }

    
}

class MyVue {
    constructor (options) {
        this.$el = options.el
        this.$data = options.data
        this.$options = options
        if ( this.$el ) {
            // 1. 实现一个数据的观察者
            new Observe(this.$data)
            // 2. 实现一个指令的解析器
            new Compile(this.$el, this)
        }
    }
}