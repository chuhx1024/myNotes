# CSS 命名规范

> 这些是参考了一些文章以及我的个人经验总结出来

## 1. CSS 书写顺序
+ 1.位置属性(position, top, right, z-index, display, float等)
+ 2.大小(width, height, padding, margin)
+ 3.文字系列(font, line-height, letter-spacing, color- text-align等)
+ 4.背景(background, border等)
+ 5.其他(animation, transition等)

## 2. 一些简写
+ 最好使用缩写
```
pading: 0 1px 2px 4px;
padding: 20px 40px;
border: 1px solid #ccc;
```
+ 去掉一些不必要的 0 和 单位
```
font-size: .8rem;
border: .5px solid pink;
```

## 3. 注意事项
+ 1.一律小写; 
+ 2.尽量用英文; 
+ 3.尽量不缩写，除非一看就明白的单词。(btn, nav)

## 4. CSS 样式表文件命名
+ 基本共用 base.css / common.css
+ 布局、版面 layout.css 
+ 主题 themes.css
+ less scss 的全局变量 variables.less
+ 全局覆盖 antd Element-UI 的样式 cover-antd.less
+ 补丁 mend.css 
+ 打印 print.css

## 5. 常用的命名

### 5.1 页面结构
+ 容器: container 
+ 页头：header 
+ 内容：content/container 
+ 页面主体：main 
+ 页尾：footer 
+ 导航：nav 
+ 侧栏：sidebar 
+ 栏目：column 
+ 页面外围控制整体佈局宽度：wrapper 
+ 左右中：left right center

### 5.2 导航
+ 导航：nav 
+ 主导航：mainnav 
+ 子导航：subnav 
+ 顶导航：topnav 
+ 边导航：sidebar 
+ 左导航：leftsidebar 
+ 右导航：rightsidebar 
+ 菜单：menu 
+ 子菜单：submenu 
+ 标题: title 
+ 摘要: summary

### 5.4 功能
+ 标志：logo 
+ 广告：banner 
+ 登陆：login 
+ 登录条：loginbar 
+ 注册：register 
+ 搜索：search 
+ 功能区：shop 
+ 标题：title 
+ 加入：joinus 
+ 状态：status 
+ 按钮：btn 
+ 滚动：scroll 
+ 标籤页：tab 
+ 文章列表：list 
+ 提示信息：msg 
+ 当前的: current 
+ 小技巧：tips 
+ 图标: icon 
+ 注释：note 
+ 指南：guild 
+ 服务：service 
+ 热点：hot 
+ 新闻：news 
+ 下载：download 
+ 投票：vote 
+ 合作伙伴：partner 
+ 友情链接：link 
+ 版权：copyright