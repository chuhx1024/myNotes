# Node.js

### Node.js 可以做什么
- 轻量级 高性能的 web 服务
- 前后端 JaveScript 同构开发
- 便捷高效的前端工程化

### Node.js 架构
#### Native Modules(当前层)
- 当前层内容有 JS 实现
- 提供应用程序可以直接调取的库, 如 fs, path, http 等 就是我们常说的核心模块
- JS 语言无法直接操作硬件的 所以需要下一层

#### Builtin Modules(胶水层)
- 这层主要是充当桥梁
- 主要可以理解为一个对照表 帮助我们去调用 C++ 的一些函数 实现自己所需的功能
- 文件的读写行为(使用到了 C++ )
- 除了有自己官方的工具 还是用了很多第三方工具

#### 下一层
- V8: 执行 JS 代码(我们自己写的JS代码, 内置的JS代码, 第三方的JS代码), 提供桥梁接口
- libuv库: 主要处理 事件循环 事件队列  异步IO
- 第三方功能模块: zlib, http, c-ares等

#### 最底层
- CPU RAM DISK OS

### 为什么是 Nodejs
- 诞生之初是为了实现高性能的 web 服务器
- 后来演化成为一门服务端"语言"

### Nodejs 的异步IO实现
- IO 分阻塞和非阻塞
    - 阻塞 IO : 
- IO 是应用的瓶颈所在
- 异步 IO 提高性能 无需 原地等待结果返回
- IO 操作属于操作系统级别, 平台都有对应是实现
- Nodejs 单线程配合事件驱动架构及 libuv 实现异步 IO

### Nodejs 事件驱动架构
- 事件驱动架构师软件开发中的通用模式
```js
const = EventEmitter = require('events')
const myEvent = new EventEmitter()
myEvent.on('事件一', () => {
    console.log('事件一执行了')
})

myEvent.emit('事件一')
```

### Nodejs 的单线程






