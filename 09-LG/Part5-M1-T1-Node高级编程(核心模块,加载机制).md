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
- 不适合处理 CPU 密集型 任务
- 适合 IO 密集型 任务

### Nodejs 应用场景
- Nodejs 做中间层 
- Nodejs 直接操作数据库
- 实时聊天应用程序

### Nodejs 常见全局变量
- __filename: 返回正在执行脚本的绝对路径
- __dirname: 返回正在执行脚本所在目录
- timer类函数: 执行顺序与事件循环间的关系
- process: 提供与当前进程互动的接口
- require: 实现模块的加载
- module exports: 处理模块导出

### Nodejs 核心模块

#### Path 模块
```js
const path = require('path')

console.log(path.basename) // 获取文件名
console.log(path.dirname) // 获取文件夹
console.log(path.extname) // 获取拓展名

// 接收一个路径 返回一个对象
console.log(path.parse('./a/b/c')) // 解析路径 {root: '/', dir: './a/b', ext: '', name: 'c'}

```

#### 全局变量之 Buffer(缓冲区)

- buffer 让 JS 可以操作 二进制
- IO 行为操作的就是 二进制数据
- Nodejs 中 buffer 是一片内存空间
- Buffer 是 一个全局变量 无须 require 可以直接用
- 一般配合 Stream 流使用, 充当数据缓冲区
- buffer 的创建
```js
const b1 = Buffer.alloc(10) // 创建一个 10 字节的 buffer
const b1 = Buffer.allocUnsefe(10) // 创建一个 10 字节的 buffer


```

#### FS 模块
- FS 是内置核心模块, 提供文件系统操作的 API
    - 基本操作
    - 常用 API
- 文件类型

| 权限位 | 所有者 |  |  | 文件所属组 | | | 其他用户 | | | 
| ---- | ---- | ---- | ---- |  ---- | ---- | ---- | ---- |---- | ---- |
| 权限项|读|写|执行|读|写|执行|读|写|执行| 
| 字符表示|r|w|x|r|w|x|r|w|x| 
| 数字表示|4|2|1|4|2|1|4|2|1|

- 常见 flag 操作符 
    - r: 表示可读
    - w: 表示可写
    - s: 表示同步
    - +: 表示执行相反操作
    - x: 表示排它操作
    - a: 表示追加操作

#### Buffer 实现大文件拷贝















