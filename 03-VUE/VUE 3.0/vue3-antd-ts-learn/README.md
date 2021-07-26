# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

## My Note

### 1. 创建项目 
```sh
yarn create @vitejs/app vue3-antd-ts-learn

# 脚手架 选 vue 选 vue + ts
```

### 2. 启动项目 
```sh
# 1. 安装依赖
yarn
# 2. 启动项目 
yarn dev
```
### 3. 安装 antd 组件库
+ 安装
```sh
yarn add ant-design-vue@next
```
+ 完全引入
```js
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
+ import Antd from "ant-design-vue"
+ import "ant-design-vue/dist/antd.css"

- createApp(App).mount('#app')
+ createApp(App).use(Antd).mount('#app')

```


### 4. 安装 vue-router 和 vueX
```sh
yarn add vuex@next vue-router@next
```

