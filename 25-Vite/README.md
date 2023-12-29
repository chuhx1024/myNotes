# Vite

## 官网: https://vitejs.dev/

## 构成
- 一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。

- 一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。

## 插件拓展
- Vite 是一种具有明确建议的工具，具备合理的默认设置。您可以在 功能指南 中了解 Vite 的各种可能性。通过 插件，Vite 支持与其他框架或工具的集成。如有需要，您可以通过 配置部分 自定义适应你的项目。

## 为什么选择 Vite
- 快 原生支持 ES 模块
    - Vite 通过在一开始将应用中的模块区分为 依赖 和 源码 两类，改进了开发服务器启动时间

## 为什么生产环境仍需打包

- 为了在生产环境中获得最佳的加载性能，最好还是将代码进行 tree-shaking、懒加载和 chunk 分割（以获得更好的缓存）。

## 使用 vite 创建 React 项目时
```js
// SWC : 主要对标Babel，誓言要代替Babel （据说：转译性能比Babel快20倍）
? Select a variant: › - Use arrow-keys. Return to submit.
    TypeScript
❯   TypeScript + SWC
    JavaScript
    JavaScript + SWC

```
