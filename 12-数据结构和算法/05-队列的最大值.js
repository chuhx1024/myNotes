class MaxQueue {
    constructor () {
        // 定义一个队列 存储值
        this.queue = {}
        this.countQ = 0
        this.headQ = 0
        // 定义一个双端队列 存储当前最大值 是一个递减队列
        this.deque ={}
        this.countD = 0
        this.headD = 0
    }

    // 入队
    push_back (item) {
        this.queue[this.countQ++] = item

        // 为 item 是否要入队 deque 做好前提条件
        while (!this.isEmptyDeque() && item > this.deque[this.countD -1]) {
            delete this.deque[--this.countD]
        }
        // 入队条件准备好了 可以入队
        this.deque[this.countD++] = item
    }

    // 出队
    pop_front () {
        if (this.isEmptyQueue()) return -1
        const headDataQ = this.queue[this.headQ]
        delete this.queue[this.headQ++]
        this.countQ--
        // 判断 deque 是否需要出队
        if (headDataQ === this.deque[this.headD]) {
            delete this.deque[this.headD++]
            this.countD--
        }
        return headDataQ
    }

    // 获取最大值
    max_value () {
        if (this.isEmptyDeque()) return -1
        return this.deque[this.headD]
    }

    // 判断 deque 是否为空
    isEmptyDeque () {
        return !(this.countD - this.headD)
    }
    // 判断 queue 是否为空
    isEmptyQueue () {
        return !(this.countQ- this.headQ)
    }

}

const m = new MaxQueue()
console.log(m)