
class Queue {
    constructor () {
        this.queue = []
        this.count = 0
    }

    enqueue (item) {
        this.queue[this.count++] = item
    }

    dequeue () {
        if (!this.isEmpty()) {
            this.count--
            return this.queue.shift()
        }
    }


    isEmpty () {
        return !this.count 
    }


}

const q = new Queue()

q.enqueue('12')
q.enqueue('123')
q.enqueue('1234')
q.dequeue()
// q.enqueue(9)

console.log(q)