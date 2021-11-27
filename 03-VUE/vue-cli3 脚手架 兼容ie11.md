### 1.更新babel.config.js配置
```sh
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ]
}

```
### 2. package.json增加配置
```sh
{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie < 11"
  ],
}
```

### 3. vue.config.js增加配置，写入用到的第三方npm包
```sh
module.exports = {
  transpileDependencies: [/node_modules[/\\\\](ant-design-vue|vuex|)[/\\\\]/],
}
```

### 4. 更新入口文件main.js配置信息
```sh
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```