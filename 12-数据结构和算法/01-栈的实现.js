class Stack {
    constructor () {
        this.data = []
        // 记录 栈的数据个数 (相当于 length)
        this.count = 0
    }
    push (item) {
        // 比 push 性能会好一点点 但还是依据 数组类型的内部结构
        // this.data[this.data.length] = item
        // 推荐使用计数方式
        this.data[this.count] = item
        this.count ++
    }

    pop () {
        if (this.isEmpty()) {
            console.log('栈为空')
            return
        }
        // 移除操作
        // return this.data.pop()
        // return this.data.splice(this.data, 1)
        // this.count --

        // 使用计数方式
        const temp = this.data[this.count -1]
        delete this.data[--this.count] // 先减一 再执行
        return temp

    }

    top () {
       if (this.isEmpty()) {
           console.log('栈为空')
           return
       } 
       return this.data[this.count - 1]
    }

    clear () {
        this.data = []
        this.count = 0
    }

    isEmpty () {
        return !this.count
    }

}

// const s = new Stack()
// s.push('a')
// s.pop()
// // s.pop()
// console.log(s, 90)
// console.log(s.isEmpty(), 91)

// 思考: 
// 1. data 和 count 实现栈的核心功能 需要保护起来
// 2. 方式一 设置为私有变量 class 的提案 还不完善
// 3. 方式二 设置为 symbol 类型 但是还是可以通过 专门的方法获取
// 4. 方式三 模块化 性能不太好
// 5. 方式四 使用闭包方式 性能不太好

var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length, i++;) {
        for(let j = 0; j < nums.length, j++;) {
            if(nums[i] + nums[j] === target) {
                result.push(i)
                return 
            }
        }
        
    }
    return result
};
console.log(twoSum([2,7,11,15], 9))