### 定义 less
```
// variables.less
@primary-color: #1890ff; // 全局主色
//自定义样式
@header-item-hover-color:blue;//头部项浮动颜色
@header-back-color:#1890ff;//头部底色

// 导出变量
:export {
    primaryColor: @primary-color; 
}
```

### main引用
```js
//全局样式变量
import variables from './theme/variables.less';
Vue.prototype.GlobalCSS = variables
```

### 使用
```js
this.GlobalCSS.primaryColor
```