// 此文作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作是会自动调用我们在此类型中定义的一些生命周期方法
// 在此文件中 可以通过父类提供的一些方法实现一些功能 如 文件写入
// 在此文件中 可以通过父类提供的一些方法实现一些功能 如 文件写入
// 在此文件中 可以通过父类提供的一些方法实现一些功能 如 文件写入
// 在此文件中 可以通过父类提供的一些方法实现一些功能 如 文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    writing () {
        // Yeoman 自动生成文件阶段自动调用此方法
        // this.fs.write(
        //     this.destinationPath('temp.txt'), // 写入文件的路径 借助了  this.destinationPath 这个API 方便获取路径
        //     '12121212'                      // 写入文件的内容
        // )

        // 通过模板的方式写入
        const tmpl = this.templatePath('abc.js')
        // 输出目标路径
        const output = this.destinationPath('abc.js')
        // 模板数据上下文
        const context = { title: 'Hello ...', success: false}
        // 使用 copyTpl API 实现文件的拷贝
        this.fs.copyTpl(tmpl, output, context)
    }

}

