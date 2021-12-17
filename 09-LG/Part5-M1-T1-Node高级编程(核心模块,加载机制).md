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

```js
const fs = require('fs')

let buf = Buffer.alloc(10)

const BUFFER_SIZE = buf.length
let readOffset = 0

fs.open('a.txt', 'r', (err, rfd) => {
    fs.open('b.txt', 'w', (err, wfd) => {
        function next () {
            fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes) => {
                if (!readBytes) {
                    fs.close(rfd, () => {

                    })
                    fs.close(wfd, () => {

                    })
                    console.log('拷贝完成了!')
                    return
                }
                readOffset += readBytes
                fs.write(wfd, buf, 0, readBytes, 0, (err, written) => {
                    next()
                })
            })
        }
        next()
    })
})
```

#### 常见的目录操作 API
- access: 判断文件或者目录是否具有操作权限
- stat: 获取目录及文件信息
- mkdir: 创建目录
- rmdir: 删除目录
- readdir: 读取目录中的内容
- unlink: 删除指定文件

#### 模块分类
- 内置模块
    - 核心模块 在 node 源码编译时写入而兼职文件中

- 文件模块
    - 代码运行时 动态加载的

#### 加载流程
- 路径分析: 依据标识符确定模块的位置(路径和非路径)
- 文件定位: 确定目标模块中具体的文件和文件类型(js,json,等)
- 编译执行: 采用对应的方式完成文件的编译执行(返回一个可用的对象)

#### VM 模块使用
- 使用 eval 执行加载进来的字符串
```js
//test.txt
var age = 18


//m.js
const fs = require('fs')
let content = fs.readFlieSync('./test.txt', 'utf-8')
eval(content)
console.log(age) // 18

```
- - 使用 eval 执行加载进来的字符串 (如果命名冲突 就会报错)
```js
//test.txt
var age = 18


//m.js
const fs = require('fs')
let content = fs.readFlieSync('./test.txt', 'utf-8')
const age = 11
eval(content)
console.log(age) // 报错 模块中的作用域是独立的 但是加载到一起  eval 方法就不合适了
```

- 使用 vm.runInThisContext()

```js
//test.txt
var age = 18


//m.js
const vm = require('vm')
const fs = require('fs')
let content = fs.readFlieSync('./test.txt', 'utf-8')
const age = 11
vm.runInThisContext(content) // 它有自己的作用域 
vm.runInThisContext('age += 10 ')  // age is not defined 但是 如果  const age = 11 改为 age = 11  全局变量 就可以访问了
console.log(age) // 11
```

#### Event 模块
- 通过 EventEmitter 类实现事件统一管理
    - nodejs 是基于事件驱动的异步操作架构, 内置 events 模块
    - events 模块提供了 EventEmitter 类(事件注册, 事件发布, 事件删除等方法)
    - nodejs 很过核心的模块继承 EventEmitter 类
- EventEmitter 常用 API
    - on: 添加当事件被触发时触发的回调函数 就是注册事件
    - emit: 触发事件, 按照注册的顺序同步调用每个事件监听器
    - once: 注册事件 当注册事件首次被调用时触发
    - off: 移除特定的监听器

```js
const EventEmitter = require('events')

const ev = new EventEmitter()

ev.on('ccc', () => {
    console.log('我执行了....')
})

ev.emit('ccc')
```

#### 发布订阅模式
- 定义对象间一对多的依赖关系
- 

#### 浏览器下的事件循环
- 分为 宏任务和微任务
- 宏任务: 正常上下文中的 定时器  都是宏任务
- 微任务: 宏任务内嵌套的 就是为微任务 Promise
- 微任务有两个触发时机
    - 同步代码执行完  执行微任务
    - 宏任务执行完 执行宏任务内部内部的微任务
- 事件队列: 任务会放在事件队列中
- 一个宏任务执行完 会执执行自己的微任务 然后才去执行下一个宏任务

#### nodejs 下的事件循环
- 队列说明
    - timers: 执行 setTimout 和 setInterval 回调
    - panding callbacks: 执行系统操作的回调, 例如: tcp udp
    - idle, prepare: 只在系统内部进行使用
    - poll: 执行与 I/O 相关的回调(文件读写的相关回调)
    - check: 执行 setInnediate 中的回调
    - close callbacks: 执行 close事件的回调
- Nodejs 完整事件环
    - 执行同步代码 将不同的任务奴添加至相应的队列(以上6种)
    - 所有的同步代码执行完以后会去执行满足条件的微任务
    - 所有的微任务代码执行后会执行 timer 队列中满足的宏任务
    - timer 中所有的宏任务执行完以后就会依次切换队列(在切换之前会清空微任务代码)

#### nodejs 和 浏览器事件环区别
- 任务队列数不同
    - 浏览器: 宏任务 微任务
    - Nodejs: 6个
- 微任务执行时机不同
    - 两者都会在同步代码执行完毕后执行微任务
    - 浏览器平台 每一个宏任务执行完毕 都会去清空微任务
    - Nodejs 平台 只有在事件队列在切换时 会去清空微任务
- 微任务优先级不同
    - 浏览器下 微任务存放再事件队列中 先进先出
    - nodejs 大原则也是先进先出  但是 process.nextTick 先于 promise.then

#### 事件环常见的一个问题
- 正常上下文中  setTimeout 和 setImmediate 会随机执行  因为  0秒有延时

- 但是 把 setTimeout 和 setImmediate 放在 fs.readFile 的回调中 就会 先执行  setImmediate 再执行 setTimeout 因为 这里有 队列切换

#### 核心模块 Stream
- 比如 linux 中的  ls | grep *.js 会将 管道左侧ls 处理的内容交给 管道右侧的 grep 处理
- Node.js 的诞生之初就是为了解决 提供 IO 性能
- 文件操作系统 和网路模块 就是流操作的深度应用者 实现了 流接口
- nodejs 中的流就是处理流式数据的抽象接口
- 常见问题(观看网路视频场景)
    - 同步读取资源文件 用户要等待数据读取完成
    - 资源文件最终一次性加载至内存 开销较大 (v8 默认提供的内存大小 1G 多一点)
    - 所以需要流来操作数据
- 流处理数据的优势
    - 时间效率: 流的分段处理可以同时操作多个数据的 chunk
    - 空间效率: 同一时间流无需占用较大内存
    - 使用方便: 流配合管道, 拓展程序简单
 - Node.js 内置了 stream 它实现了流操作对象

 - Node.js 中 流的分类
    - Readable: 可读流
    - Writeable: 可写流
    - Duplex: 双工流 可读可写
    - Tranform: 转换流 可读可写 还能实现数据转换

- node.js 中 流 的特点
    - Stream 模块实现了上4个具体的抽象 (具体使用可以调用具体的 API 比如 fs 模块 都是 基于 流实现的)
    - 所有的流都继承自 EventEmitter 所以可以实现事件相关的操作

#### 使用 stream 实现文件的拷贝
```js
const fs = require('fs')
// 创建可读流
let rs = fs.createReadStream('./test.txt')
// 创建可写流
let ws = fs.createWriteStream('./test1.text')
// 管道操作实现拷贝
rs.pipe(ws)


// 或者使用 使用 chunk 实现拷贝
rs.setEncoding('utf-8')
rs.on('data', (chunk) => {
    ws.write(chunk)
})
```

#### 自定义可读流
- 思路
    - 继承 stream 里的 Readable
    - 重写 _read 方法调用 push 产出数据
    - 明确数据生成和消费
    - 利用已有的 API 实现自定义的可读流
    - 明确数据消费的事件使用

#### 自定义可写流
- 思路
    - 继承 stream 里的 Readable
    - 重写 _read 方法调用 push 产出数据
    - 明确数据生成和消费
    - 利用已有的 API 实现自定义的可读流
    - 明确数据消费的事件使用


#### 自定义双工流
- 思路
    - 继承 stream 里 Rransform 类
    - 重写 _transform 方法调用 push 和 callback
    - 重写 _flush 方法, 处理剩余数据(不是必须的)


#### 链表结构
- 概念
    - 链表是一系列节点的集合
    - 每个节点都具有指向下一个节点的属性
    - 链表就是一个容器
    - head --> node节点1 --> node节点2 --> null
- 分类
    - 双向链表(最常用 查询速度快)
    - 单项链表
    - 循环链表
- 作用
    - 存放数据
    
- 为什么不用数组代替链表结构
    - 数组的缺陷
        - 数据的存储的长度具有上限
        - 数组存在塌陷问题(删除, 添加数据时会移动数据的位置(下标))

### 网路通信模型

### Http 协议
- 



















