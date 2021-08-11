// Grunt 的入口函数
// 用于定义一些需要 Grunt 自动执行的任务
// 需要导出一个函数
// 此函数接收一个 grunt 的形参 内部提供一些创建任务的 API
const sass = require('sass')

module.exports = grunt => {
    // 可以使用 initConfig API 配置一个属性 可以用 grunt.config 取到配置
    grunt.initConfig({
        abc: 'bar',
        ccc: {
            ddd: 'jay'
        },
        build: {
            options: {  // options 项  不会当做任务执行  作为基础配置出现 this.options() 可以拿到对象
                foo: 123,
            },
            css: '1', // 子目标
            js: '2'   // 子目标
        },
        sass: {
            options: {
                sourceMap: true,
                implementation: sass,
            },
            main: {

                files: {   // Dictionary of files
                    'dist/css/index.css': 'src/scss/index.scss',       // 'destination': 'source'
                }
            }
        },
        babel: {
            options: {
              sourceMap: true,
              presets: ['@babel/preset-env']
            },
            dist: {
              files: {
                'dist/app.js': 'src/app.js'
              }
            }
        }
    })
    // 多目标模式, registerMultiTask API 可以让任务根据配置星城多个子任务
    // yarn grunt build  可以运行这一组任务
    // 如果向单独运行  就  yarn  grunt build:css
    grunt.registerMultiTask('build', function(){  // build 必须在 initConfig 中定义  
        console.log('我就是一组目标')
        console.log(this.options())  // 可以拿到 options 定义的对象
        console.log(`target: ${this.target}, data: ${this.data}`)  // 可以用this  拿到每次执行的 key  和 val  当然不能使用 箭头函数
    })
    

    // 可以使用 registerTask API  注册一些任务
    grunt.registerTask('foo', () => {
        console.log(grunt.config('abc'))
        console.log(grunt.config('ccc.ddd'))  //  支持点语法 
        console.log(grunt.config('ccc').ddd)  //  也可以拿到对象  在自己点出来
        console.log('Hello grunt ~ ')
    })

    // 第一个参数 是任务名称  第二是任务描述(可以不填)(执行 yarn grunt --help 是可以看到) 第三个是任务回调
    grunt.registerTask('bar', '我是关于 bar 任务的描述', () => {
        console.log('other task ~~~~')
    })

    // 如果名字是 default 就会成为默认任务 直接执行  yarn  grunt 就可以
    // grunt.registerTask('default', () => {
    //     console.log('default task')
    // })

    // 传入数组可以执行一组任务
    grunt.registerTask('default', ['foo', 'bar'])

    // 关于异步任务的使用 
    // 不能使用箭头函数 因为要使用 函数中的 this
    // 先声明 一个 done 函数   异步结束要调用 done 函数才可以
    grunt.registerTask('async-task', function() {
        const done = this.async()
        setTimeout(() => {
            console.log('async task working~')
            done()
        })
    })
    // Grunt 插件的使用
    // 装包
    // loadNpmTasks 载入 
    // 在 initConfig 中为其配置相应的选项
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-babel')

}
