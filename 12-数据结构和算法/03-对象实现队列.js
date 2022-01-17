class Queue {
    constructor () {
        this.queue = {}
        this.count = 0

        // 记录队首的 key
        this.head = 0
    }

    enQueue (item) {
        this.queue[this.count++] = item
    }

    deQueue () {
        const headData = this.queue[this.head]

        delete this.queue[this.head++]
        this.count--
        return headData
    }
 }

 const q = new Queue()

 q.enQueue(12)
 q.enQueue(123)
 q.enQueue(1234)
 q.deQueue()
 console.log(q)