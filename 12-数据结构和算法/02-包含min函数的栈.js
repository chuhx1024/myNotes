class MinStack {
    constructor () {
        this.stackA = []
        this.countA = 0
        this.stackB = []
        this.countB = 0
    }

    push (item) {
        this.stackA[this.countA++] = item
        if (this.countB === 0 || item <= this.min()) {
            this.stackB[this.countB++] = item
        }
    }

    pop () {
        const temp = this.stackA[--this.countA]
        delete this.stackA[this.countA]
        if (temp === this.min()) {
            delete this.stackB[--this.countB]
        }
        return temp
    }

    min () {
        return this.stackB[this.countB - 1]
    }

}

const s = new MinStack()
s.push(2)
s.push(4)
s.push(4)
s.push(1)
s.pop()
console.log(s)
console.log(s.min())