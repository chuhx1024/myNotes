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
##### 能干什么
    - 不同于一般的 cli 工具 Yeoman 更像是一个脚手架平台
    - 搭配不同的 generator 创建不同的项目结构
    - 也就是说我们可以自定义 generator  来搭建自己的脚手架
    - 他的优点也是缺点 大而全 显得不够专注 

##### 安装
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

##### 自定义 Generator : 基于 Yeoman 搭建自己的脚手架
- 基础工作
```js
// 需要一个基础结构
|__generators/...................生成器目录
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
- 实现写入功能
```js
// generators/app/index.js

// 此文作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作是会自动调用我们在此类型中定义的一些生命周期方法
// 在此文件中 可以通过父类提供的一些方法实现一些功能 如 文件写入
// 在此文件中 可以通过父类提供的一些方法实现一些功能 如 文件写入
// 在此文件中 可以通过父类提供的一些方法实现一些功能 如 文件写入
// 在此文件中 可以通过父类提供的一些方法实现一些功能 如 文件写入

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    writing () {
        // Yeoman 自动生成文件阶段自动调用此方法
        this.fs.write(
            this.destinationPath('temp.txt'), // 写入文件的路径 借助了  this.destinationPath 这个API 方便获取路径
            '12121212'                      // 写入文件的内容
        )
    }
}
```
- 通过模板方式写入文件到目标目录(更加高效)
```js
// generators/app/index.js
module.exports = class extends Generator {
    writing () {
        // 通过模板的方式写入
        const tmpl = this.templatePath('abc.js')
        // 输出目标路径
        const output = this.destinationPath('abc.js')
        // 模板数据上下文
        const context = { title: 'Hello ...', success: false}
        // 使用 copyTpl API 实现文件的拷贝
        this.fs.copyTpl(tmpl, output, context)
    }
}
```
- 接收用户输入的动态数据








#### Plop 简介
- 作用: 在项目开发的过程中使用 可以用指令创建一个组件/模块需要的文件  相当于 User Snippets 的爷爷

