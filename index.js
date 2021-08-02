
class Person {
    constructor (name) {
        this.name = name
    }
    say () {
        console.log(`Hi, my name is ${this.name}`)
    }
}

class Student extends Person {
    constructor (name, number) {
        super(name) // 因为父类需要传参  就要调用 super 传递参数
        this.number = number
    }
    hello () {
        super.say()  // 如果想调取 父类的方法  可以用 super . 出来
        console.log(`My school number is ${this.number}`)
    }
}

const s = new Student('小明', '大学')
s.hello()