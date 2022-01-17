class Deque {
    constructor () {
        this.queue = {}
        this.count = 0
        this.head = 0
    }

    addFront (item) {
        this.queue[--this.head] = item
    }
}