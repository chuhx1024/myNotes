# 脚手架工具平台

### 脚手架的本质作用
- 创建项目的基本结构 提供项目规范和约定

### 搭建新的项目有很多重复的工作要做
- 相同的组织结构
- 相同的开发范式
- 相同的模块依赖
- 相同的工具配置
- 相同的基础代码

### 常用的脚手架工具 
- React --> create-react-app
- Vue --> vue cli
- Angular --> angular cli
- 基本都是根据你提供的信息取创建对应的项目基本结构(比较个性化)

### 通用型脚手架工具 
- 可以根据一套模板  生成一个项目结构
- 很灵活 很容易扩展

#### Yeoman 基本使用
- 能干什么
    - 不同于一般的 cli 工具 Yeoman 更像是一个脚手架平台
    - 搭配不同的 generator 创建不同的项目结构
    - 也就是说我们可以自定义 generator  来搭建自己的脚手架
    - 他的优点也是缺点 大而全 显得不够专注 

- 安装
```sh
npm i yo -g
```

- 安装只是安装了平台  想创建项目 还要 搭配安装 对应的 模块
```sh
# 安装 generator-node 模块 可以创建 node 项目
npm i generator-node -g
```

- 使用  去一个新目录下执行(此时可以去掉 generator- 只用 node 就够了)
```sh
yo node  
# 然后就是一些选项 选完 项目架子就有了
```

- 使用 Sub generator 如果只是想使用 generator-node 中某个模块的功能 可以这样用
```sh
# : 后边填上模块名 就可以了
yo node:cli 
```

- 自定义 Generator : 基于 Yeoman 搭建自己的脚手架

```js
// 需要一个基础结构
|__generator/....................生成器目录
|  |__app/ ......................默认生成器目录
|  |  |__index.js................默认生成器实现
|  |__component/.................其他生成器目录
|     |__index.js................其他生成器实现
|__package.json..................模块包配置文件

// 需要 模块的名称必须是 generter-<name>
// 创建一个文件夹
mkdir generator-sample
cd generator-sample
yarn init

yarn add yeoman-generator  // 为我们创建提供集类 和 API




```






#### Plop 简介
- 作用: 在项目开发的过程中使用 可以用指令创建一个组件/模块需要的文件  相当于 User Snippets 的爷爷

