### EsLint 介绍
- 最为流行的 JS Lint 工具 检测JS代码的质量
- ESList 很容易统一开发人员的编码风格
- ESList 可以帮助开发者提升编码能力

#### ESLint 安装
```sh
# 使用 yarn  有時候回安裝失敗
npm i eslint -D
```
#### 初始化
```sh
yarn eslint --init
// 只有要选择 模式
  To check syntax only  // 只校验语法  比如 括号没有闭合 function 写错了 var 写错了
  To check syntax and find problems  // 校验语法 发现问题  比如 调用一个没有定义的函数
> To check syntax, find problems, and enforce code style // 校验语法 发现问题 还对代码风格约束  比如缩进不统一

 How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

? Which style guide do you want to follow? ...
  Airbnb: https://github.com/airbnb/javascript
> Standard: https://github.com/standard/standard        
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo

? What format do you want your config file to be in? ... 
> JavaScript  // 建议使用 JS
  YAML
  JSON

// 之后安装相应的依赖 就可以了
文件根目录会自动生成 .eslintrc.js
```

#### ESLint 配置文件解析
```js
module.exports = {
  env: { // 标记代码的运行环境  检测某些变量是否可以 (window, docoment)
    browser: true,
    es2021: true
  },
  extends: [ // 共享的配置
    'standard'
  ],
  parserOptions: { // 可以使用的JS版本
    ecmaVersion: 12
  },
  // rules 中的 0 1 2 
  // "off" 或 0 - 关闭规则
  // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: { // 自定义的规则 常用配置
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'indent': [2, 4], // js 4个空格缩进
    'vue/html-indent': [2, 4], // html 4个空格缩进
    'eqeqeq': 0, // 允许使用 == !=
    'comma-dangle': [2, 'always-multiline'], // 对象 数据 分行显示的 结尾必须加 ','
  },
  globals: { // 可以添加些全局变量 不会报错
    jQuery: 'readonly'
  }
}
```

#### 一键修复
```js
- vue cli 项目直接  yarn lint
- 一般 项目 
// package.json
{
    "scripts": {
        "lint": "eslint src/**/**/*.* --fix"  // 修复src 下
        "lint": "eslint . --fix"  // 修复所有
        "lint": "eslint --fix --ext .js --ext .jsx --ext .vue src/ test/unit test/e2e/specs"
    }
}
```

#### ESLint 和 Webpack 结合
```js
rules: [
    {
        test: /\.js$/,
        use: 'eslint-loader',
        enforce: 'pre', // 让 eslint-loader 先执行
    }
]
```