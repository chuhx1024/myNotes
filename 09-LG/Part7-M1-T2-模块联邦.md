## 模块联邦(Module Federation)
### 一, 概述
- 是 webpack 5 中新增的一项功能,  可以是实现跨应用共享模块
- 可以通过模块联邦, 在容器应用中加载微应用
    - 一个容器应用(container), 一个微前端应用A(products), 一个微前端应用B(cart)

### 二, 实现方式
- 主要是通过  ModuleFederationPlugin 插件 配置 注册 微前端应用
