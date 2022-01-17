class Deque {
    constructor () {
        // 定义双端队列栈
        this.queue = {}
        // 尾部 key 标示
        this.count = 0
        // 头部 key 标示
        this.head = 0
    }
    // 队首添加
    addFront (item) {
        this.queue[--this.head] = item
    }

    // 队尾添加
    addBack (item) {
        this.queue[this.count++] = item
    }

    // 队首移除
    removeFront () {
        if (this.isEmpty()) return
        const frontData = this.queue[this.head]
        delete this.queue[this.head++]
        return frontData
    }

    // 队尾移除
    removeBack () {
        if (this.isEmpty()) return
        const backData = this.queue[this.count-1]
        delete this.queue[--this.count]
        return backData
    }

    // 队列长度
    size () {
        return this.count - this.head
    }
    isEmpty () {
        return !this.size()
    }
}

const deq = new Deque()
console.log(deq)