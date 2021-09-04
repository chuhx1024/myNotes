const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const HtmlwebpackPlugin = require('html-webpack-plugin')

const copyWebpackPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')

class MyPlugin {
    apply(compiler) {
        console.log('MyPlugin 启动')
        // emit 就是打包后最后要写入 dist 前的钩子函数
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation 可以理解为此次打包的上下文
            for (const name in compilation.assets) {
                console.log(name, 1)
            }
        })
    }
}

module.exports = {
    mode: 'none', // 默认为 pruduction 另外两种  development none
    // 打包的入口文件
    entry: './src/main.js',
    // 打包的出口文件 
    output: {     
        filename: 'bundle.js', // 生成的打包文件 默认为 main
        // 这里需要一个 绝对路径 需要借助 node 的 path 模块
        path: path.join(__dirname, 'output'), 
        // publicPath: 'output/',
    },
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                    }
                }]
            },
            {
                test: /.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024 // 10kb
                    }
                }
            },
            {
                test: /.md$/,
                use: {
                    loader: './markDown-loader.js',
                    options: {
                        limit: 10 * 1024 // 10kb
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlwebpackPlugin({
            template: './src/index.html',
            title: '我就是自定义的标题'
        }),
        new copyWebpackPlugin({
            patterns: [
                { 
                    from: path.join(__dirname,'public'),
                    to: 'public' 
                }
            ],
        }),
        new MyPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}