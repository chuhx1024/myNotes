# TypeScript 

## 观点
- 时代抛弃你的时候 连一句再见都不会说
- 在应用层面，不鼓励使用 TS 的，作茧自缚。在应用层面，追求的所见即所得，客户要什么，你给实现什么，简单粗暴快速，别整那些花里胡哨的妖艳贱货。
- 作为前端学习下带类型的语言，会有新的发现和提升。
- 一个不需要投入太多学习成本，就能得到一堆收益: 
    - 很可能是，招聘上的一行字（熟悉ts的优先），可能是一个逼格
    - 没错，它真正的好处远远不及表面的光荣
- 事实上，项目质量，代码好坏还是看个人功底，还有项目有没有坚持代码 review

## 介绍
- TypeScript 是由微软公司在 2012 年正式发布，现在也有 多 年的不断更新和维护了;
- TypeScript 其实就是 JavaScript 的超集，也就是说 TypeScript 是建立在 JavaScript 之上的，最后都会转变成 JavaScript。类似 Sass less
## 安装
```sh
sudo npm i typescript -g or
yarn global add typescript

// 验证
npm view typescript version  
// 查看 typescript 所有可用版本
npm view typescript versions
```
## 使用
```
// index.ts
let str: string = '123'
console.log(str)

// 使用 tsc 执行 生成 js
tsc index.ts => index.js
// 然后使用 node 运行
node index.js
```
## 直接全局安装 ts-node 执行 ts文件
```
sudo npm i ts-node -g
ts-node index.ts // 123
```

## 资料

- 视频地址: https://www.bilibili.com/video/BV1TP411S7vi/?p=2&spm_id_from=pageDriver&vd_source=715e12678fa717c5adb08b6047d9d786
- 笔记地址: https://luckybo0027.gitee.io/hm-docs/ts/
- 中文官网： https://www.tslang.cn/


## Ts 核心

- 基础数据类型 推荐不写 类型  让 ts 自己推断
