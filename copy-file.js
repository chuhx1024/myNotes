const fs = require('fs')

let buf = Buffer.alloc(10)

// fs.open('a.txt', 'r', (err, rfd) => {
//     console.log(rfd, 123)
//     fs.read(rfd, buf, 0, 10, 0, (err, readBytes, buffer) => {
//         console.log(readBytes)
//         console.log(buffer)
//     })
// })

const BUFFER_SIZE = buf.length
let readOffset = 0

fs.open('a.txt')