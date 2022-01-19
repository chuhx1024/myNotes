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

    // 获取节点(根据索引)
    get (index) {
        if (this.count === 0 || index < 0 || index >= this.count) return
        // 迭代链表 找到对应节点
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    // 添加节点 (根据索引)
    addAtIndex (value, index) {
        if (this.count === 0 || index >= this.count) return
        // 如果 index <= 0 都添加到头部
        if (index <= 0) {
            return this.addAtHead(value)
        }
        // 处理正常区间 
        const prev = this.get(index -1)
        const next = prev.next
        const node = new LinkedNode(value)
        node.next = next
        prev.next = node
        this.count++
    }

    // 删除(根据索引)
    removeAtIndex (index) {
        if (this.count === 0 || index >= this.count) return
        if (index === 0) {
            this.head = this.head.next
        } else if (index === this.count) {
            this.get(this.count - 1).next = null
        } else {
            // 直接处理正常情况
            const prev = this.get(index -1)
            const current = this.get(index)
            const next = this.get(index + 1)
    
            prev.next = next
            return current
        }
        this.count--
    }

}

const l = new linkedList()


