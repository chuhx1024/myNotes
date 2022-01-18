// 定义节点类
class LinkedNode {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor () {
        this.count = 0
        this.head = null
    }
    // 添加节点(尾部)
    addAtTail (value) {
        // 创建新的节点
        const node = new LinkedNode(value)

        // 检查链表是否存在数据
        if (this.count === 0) {
            this.head = node
        } else {
            // 找到链表的尾部, 将最后一个节点的 next 设置为 node
            let current = this.head
            while ( current.next !== null) {
                current = current.next
            }
            current.next = node
        }

        this.count++
    }

    // 添加节点(头部)
    addAtHead (value) {
        const node = new LinkedNode(value)

        // 检查链表中是否存在数据
        if (this.count === 0) {
            this.head = node
        } else {
            // 找到链表的头部, 将原来头部设置给新节点的 next
            let current = this.head
            node.next = current
            this.head = node
        }
        this.count++
        
    }
}

const l = new linkedList()


