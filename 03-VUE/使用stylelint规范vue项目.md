# Stylelint

### 概述
- stylelint 是一个强大和现代的 CSS 审查工具，
- 有助于开发者推行统一的代码规范，避免样式错误。
- 其支持 less、sass 这类预处理器，目前 stylelint 有一百多条校验规则，并且还在逐步增加。

### stylelint 具体什么作用
- stylelint 有一百多条校验规则, 这些规则可以分为三类：
    - 用于校对风格的规则
        - 针对空格（比如说冒号附近的空格）、换行、缩进等等。

    - 用于判别代码可维护性的规则
        - 判断在CSS选择器中是否有使用某个ID，或者在某条声明当中是否应用了important关键词。

    - 用于判断代码错误的规则
        - 检测错误的HEX颜色写法或者某条简写属性是否会覆盖其他的声明语句。
### VS code 安装插件 报错提示
- stylelint 插件 logo 是一个领子 不要安装错误
### 安装
```sh
yarn add stylelint stylelint-config-standard stylelint-config-rational-order stylelint-webpack-plugin -D
yarn add stylelint-scss -D
yarn add stylelint-less -D

```
- stylelint是运行工具
- stylelint-config-standard或者stylelint-config-recommended是stylelint的推荐配置
- stylelint本身就很好地支持SCSS语法（以及其他预处理器的语法），但是stylelint通常专注于标准CSS。而stylelint-scss引入了特定于SCSS语法的规则
- stylelint-config-rational-order是Stylelint配置，通过按照以下顺序将相关属性声明进行分组来对它们进行排序：
    - 1. Positioning      
    - 2. Box Model      
    - 3. Typography      
    - 4. Visual      
    - 5. Animation      
    - 6. Misc
```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Box Model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Typography */
  color: #888;
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Visual */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
}
```
- stylelint-webpack-plugin是webpack插件，使用stylelint检查CSS/SCSS代码。

### 配置文件
```js
// stylelint.config.js
module.exports = {
    defaultSeverity: 'error', // 只支持 “warning" 和 ”error" 两种，用于定义全局默认的报错等级
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order'], // 可以扩展现有配置（无论是自己的配置还是第三方配置
    // stylelint本身就很好地支持SCSS语法（以及其他预处理器的语法），但是stylelint通常专注于标准CSS。而stylelint-scss引入了特定于SCSS语法的规则。
    // plugins: ['stylelint-scss', 'stylelint-less'], // 根据情况开启
    rules: { // 默认情况下未打开任何规则，也没有默认值。必须明确配置每个规则才能将其打开
        // 禁止低优先级的选择器出现在高优先级的选择器之后
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        indentation: 4, // 缩进
    },
}

```

#### 忽略文件
```json
# .stylelintignore
# 其他类型文件
*.js
*.jpg
*.png
*.eot
*.ttf
*.woff
*.json

# 测试和打包目录
/test/
/dist/
```

### 通过 npm 运行
```json
// package.json
{
    "scripts": {
        "lint:css": "stylelint **/*.{html,vue,css,sass,scss,less} --fix"  // 修复所有
        "lint:style": "stylelint src/**/*.{html,vue,css,sass,scss,less} --fix" // 只修复 根目录src下文件夹和文件
    }
}
```

### 配置 webpack 插件  // 使用后 在 yarn serve 时就会校验
```js
// vue.config.js
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    ...
    configureWebpack: {
        plugins: [new StyleLintPlugin({
           files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
           fix: false, // 是否自动修复
           cache: false, // 是否缓存
           emitErrors: true,  // 在控制台显示报错信息
           failOnError: false, // true 不通过会 报错 false 只是提示不会报错
        })],
    },

}
```

### stylelint 与 eslint 同时使用 git-hooks 配置
```json
// package.json
{
    ...
    "lint-staged": {
        "*.{html,vue,css,sass,scss,less}": [
          "npm run lint:css"
        ]
    }，
    "gitHooks": {
        "pre-commit": "lint-staged"
    },
}

```
