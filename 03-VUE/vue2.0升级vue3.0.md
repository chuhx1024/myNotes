# 升级指南
## 一. 常用 API 的改变
### 1. $children 的变化
- vue2.0 中 父组件 直接使用 this.$childern 可以拿到 所有的子组件
- vue3.0 中 $childern 废弃  可以使用 $refs

### 2. filter 过滤器 废除
- 建议使用 计算属性 或者 函数 实现

### 3.插槽的统一
- 2.0 中 可以使用  v-solt:ccc / #ccc 和 v-bind:ccc="ccc"
- 3.0 中 统一使用 v-solt:ccc / #ccc 

### 4. v-if v-for 优先级 改变
- 一版情况下不推荐这样用  最好使用 计算属性或整理函数 实现需求
- 2.0 v-for 优先级高
- 3.0 v-if 优先级高

### 5. v-model 的改变
- 2.0 中 一个组件只能使用 一个 v-model 和 子组件的 value 和 input 事件绑定
- 2.0 中 还可以使用 .sync 双向绑定其他props  触发的是 update:ccc 事件
- 3.0 中 可以给 v-mode:ccc = '父组件的data' 添加一个 修饰  完全代替了 .sync 统一触发 update:ccc

### 6.按键修饰符的改变
- 2.0中
```html
<!-- 键码版本 -->
<input v-on:keyup.13="submit" />

<!-- 别名版本 -->
<input v-on:keyup.enter="submit" />

// 此外，也可以通过全局的 config.keyCodes 选项定义自己的别名。

Vue.config.keyCodes = {
  f1: 112
}
```

- 3.0 中 可以直接绑定 不用在映射了
```html
<!-- Vue 3 在 v-on 上使用按键修饰符 -->
<input v-on:keyup.page-down="nextPage">

<!-- 同时匹配 q 和 Q -->
<input v-on:keypress.q="quit">
```

## 二. 3.0生命周期的改变
### 1. 3.0 完全兼容 2.0 的生命周期 没有任何改变(组件级别的生命周期)
### 1. setup 内部的生命周期
- setup 本身会在 beforeCraete 或者说是在  init 时执行的
- setup 内部的生命周期
    - beforeCreate	    Not needed*
    - created	        Not needed*
    - beforeMount	    onBeforeMount
    - mounted	        onMounted
    - beforeUpdate	    onBeforeUpdate
    - updated	        onUpdated
    - beforeUnmount	    onBeforeUnmount
    - unmounted	        onUnmounted
    - errorCaptured	    onErrorCaptured
    - renderTracked	    onRenderTracked
    - renderTriggered	onRenderTriggered
    - activated	        onActivated
    - deactivated	    onDeactivated
- 注意 setup 内部的生命周期使用时 需要按需引入
```js
import { ref, onMounted } from 'vue'
// 在我们的组件中
setup (props) {
  const repositories = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(props.user)
  }

  onMounted(getUserRepositories) // 在 `mounted` 时调用 `getUserRepositories`

  return {
    repositories,
    getUserRepositories
  }
}
```

## 项目升级劝退指南
- 需要认真的开 官方 vue2迁移vue3 指南(新增的 API 还好说 尤其要注意 废弃 和改变的API用法)
- 评估标准
    - 项目的量级和业务需求
        - 项目 好多年了 有些代码都看不懂 不要升了
        - 一定是有业务需求了才升级 而不是一味的追求新技术
    - 团队能力
        - 不是一个人的事情 要考虑团队小伙伴的能力
        - 可以先用一个新的 vue3.0 项目 让不熟悉的同学 先熟悉起来
    - 不兼容的代码评估
        - 直接去官网迁移指南看(必读)
    - 第三方拓展的插件评估
        - 目前生态已经起来了 
    - 综合评估成本
        - 升级带来性能提升(是不是微乎其微)
        - 项目周期(人力物力)
        - 招聘新人(钱)
        - 技术培训(时间)






