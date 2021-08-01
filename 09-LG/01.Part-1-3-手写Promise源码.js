// 为了代码有提示  不容易出错
const PENDING = 'pending'
const FULFILLEN = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor (executor) {
        executor(this.resolve, this.reject)
    }
    // Promise 的内部状态 
    status = PENDING
    // then方法第一参数传来的成功的值
    value = undefined
    // then方法第二参数传来的失败的原因
    reason = undefined
    successCb = []
    failCb = []

    resolve =(val) => {
        // 内部状态只有是 padding 时才可以改
        if (this.status !== PENDING) return
        this.status = FULFILLEN
        this.value = val
        while (this.successCb.length) {
            this.successCb.shift()(this.value)
        }
        
    }
    reject = (val) => {
        // 内部状态只有是 padding 时 才可以改 
        if (this.status !== PENDING) return
        this.status = REJECTED
        this.reason = val
        while (this.failCb.length) {
            this.failCb.shift()(this.reason)
        }
    }
    then (successCb, failCb) {
        console.log(this.status, 80)
        switch (this.status) {
            case FULFILLEN:
                var x = successCb(this.value)
                break
            case REJECTED: 
                failCb(this.reason)
                console.log(123)
                break
            default: 
                this.successCb.push(successCb)
                this.failCb.push(failCb)
        }
        return new MyPromise((resolve, reject) => {
            resolve(x)
        })
    }

}

// const ccc = new Promise((resolve, reject) => {
//     resolve()
//     reject()
// })
// console.log(ccc)
const bbb = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('123444')
    }, 1000)
    setTimeout(() => {
        reject("999888")
    }, 2000)
})

console.log(bbb)
bbb.then((val) => {
    console.log(val)
    return 100
}, (val) => {
    console.log(val)
}).then((val) => {
    console.log(val)
    console.log('第二')
}, (val) => {
    console.log(val)
})