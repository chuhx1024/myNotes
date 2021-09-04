const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'none',
    output: {
        filename: 'built.js',
        path: path.resolve('dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ]
}