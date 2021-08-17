const path = require('path')
module.exports = {
    mode: 'none', // 默认为 pruduction 另外两种  development none
    // 打包的入口文件
    entry: './src/main.js',
    // 打包的出口文件 
    output: {     
        filename: 'bundle.js', // 生成的打包文件 默认为 main
        // 这里需要一个 绝对路径 需要借助 node 的 path 模块
        path: path.join(__dirname, 'output'), 
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.png$/,
                use: ['url-loader']
            }
        ]
    }
}