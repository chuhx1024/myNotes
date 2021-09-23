const http = require('http')

// 1.创建 web服务器
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('拉勾教育')
})
// 2.设置 web服务器 监听3000端口
server.listen(3000, () => {
    console.log('服务器运行了')
})