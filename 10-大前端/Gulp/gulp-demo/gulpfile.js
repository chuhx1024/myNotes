// gulp 的入口文件

const { series, parallel } = require("gulp")

exports.foo = done => {
    console.log('task')
    done() // 标识任务完成  比 grunt 爽太多
}

exports.default = done => {
    console.log('default task working!~')
    done()
} 
// 此种方式是 4.0 以前的 保留了  但是现在不推荐
// const gulp = require('gulp')
// gulp.task('bar', done => {
//     console.log(123)
//     done()
// })

// 组合任务
const task1 = done => {
    setTimeout(() => {
        console.log('task1 working~')
        done()
    }, 1000)
}
const task2 = done => {
    setTimeout(() => {
        console.log('task1 working~')
        done()
    }, 1000)
}
const task3 = done => {
    setTimeout(() => {
        console.log('task1 working~')
        done()
    }, 1000)
}

// 创建串行任务
exports.foo1 = series(task1, task2, task3)

// 创建并行任务 如编译 css 和编译 css 互不干扰可以 并行
exports.bar = parallel(task1, task2, task3)

// 关于异步的处理
