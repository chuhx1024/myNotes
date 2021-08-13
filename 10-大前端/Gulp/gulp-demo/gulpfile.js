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
exports.callback = done => {
    console.log('callback task' )
    done()
}
exports.callback_error = done => {
    console.log('callback task')
    done(new Error('task failed'))
}

exports.promise = () => {
    console.log('promise task~')
    return Promise.resolve()
}

exports.promise_error = () => {
    console.log('promise task~')
    return Promise.reject(new Error('task failed~'))
}

// async 和 await 的使用(需要 node 8.0 及以上)
// 把  setTimeout 简单封成一个 Promise
const timeout = time => {
    return new Promise (resolve=> {
        setTimeout(resolve, time)
    })
}
exports.async = async () => {
    await timeout(2000)
    console.log('async task ~ ')
}

// stream 方式的异步  
const fs = require('fs')
exports.stream = () => {
    const readStream = fs.createReadStream('package.json') // 读取的文件流
    const writeStream = fs.createWriteStream('temp.txt')  // 文件流写入的目标
    readStream.pipe(writeStream)  // 可以理解为导入
    return readStream  // readStream 内部有 done() 所以可以执行异步 当 文件读取 写入完成 会触发 end 事件  return 出去了 gulp 也就知道了
    // 真实的原因 readStream.on('end', () => done()) 它内部有 done
}


// 压缩文件
const { Transform }  = require('stream')
exports.zip = () => {
    // 文件流读取
    const read = fs.createReadStream('src/normalize.css')

    // 文件流写入
    const write = fs.createWriteStream('normailize.min.css')
    
    // 文件流转换
    const transform = new Transform({
        transform: (chunk, encoding, callback) => {
            const input = chunk.toString()
            console.log(1000,input, 9091)
            const output = input.replace(/\s+/g, '').replace()(/\/\*.+?\*\//g, '')
            callback(null, output)
        }
    })
    
    read.pipe(transform).pipe(write)
    return read
}

// Gulp 文件操作IPA 插件使用
// Gulp 创建任务的流程
// 先通过 src 创建一个读取流
// 使用插件提供的转换流 实现文件的加工
// 使用 dest 实现文件的写入

// 常用插件 yarn gulp-clean-css 提供压缩 css 代码

const { src, dest } = require('gulp')
const cleanCss = require('gulp-clean-css')  // 压缩 css 的插件
const rename = require('gulp-rename')       // 重命名插件

exports.build = () => {
    return src('src/*.css')
        .pipe(cleanCss())  
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('dest'))

}
 
