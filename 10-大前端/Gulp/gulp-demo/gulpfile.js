// gulp 的入口文件

exports.foo = (done) => {
    console.log('task')
    done() // 标识任务完成  比 grunt 爽太多
}