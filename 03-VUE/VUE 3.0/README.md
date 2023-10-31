# VUE 3.0

## 1. Vue 3.0 新特性介绍
### 1.1 Vue 3.0 现状
- 版本说明:
    - Alpha(阿尔法) 版表示内部测试版 一般不对外发布 bug比较多
    - Beta(贝塔) 版表示公开测试版 该版本依然存在很多bug 而且还会添加新功能
    - Rc (Release Candidate)版 发行候选版本 不再添加新功能, 主要是修复 bug
    - Release 版 正式发布版 官方推荐的版本
- 2020.01.04 vue发布 3.0 alpha版
- 2020.04.17 vue发布 3.0 beta版
- 2020.07.18 vue发布 3.0 rc-1版
- 2020.09.18 vue发布 v3.0.0 One Piece
- 2023.10.24 vue发布 v3.3.7
- 目前最新版  v3.3.7
- https://github.com/vuejs/vue-next/releases

### 1.2 Vue 3.0 新特性
- 响应式数据重新实现(使用ES6的proxy 代替了 Object.defineProperty)
- 源码使用 ts进行重构(更好的类型推导)
- 虚拟DOM新算法(更快 更小)
- 提供了composition api 为了更好的逻辑复用和代码组织
- 自定义渲染器(可以根据需求自定义各种各样的渲染器)
    - APP端
    - 小程序端
    - 游戏开发
- Fragment, 模板可以有多个根元素
- 等等...
### 1.3 官网
- Vue 3.0 官网: https://v3.vuejs.org/
- Composition api 官网: https://composition-api.vuejs.org/zh/

## 2. Vue 2.0 和 3.0 响应式原理的对比
### 2.1 Vue 2.0 响应式原理 
- Vue 2.0 中使用 Object.defineProperty 方法实现数据的响应
```js
var o = {} 
    
// 给 o 提供属性
o.name = '张三'

// 等价于
Object.defineProperty( o, 'name', {
    configurable: true, // 可配置  如果 false 定义 defineProperty 是无效的
    writable: true, // 可以改
    enumerable: true, // 控制属性是否可枚举, 是不是可以被 for-in 取出来 比如对象中的 __proto__ 就是灰色的不能遍历出来 就是设置了 enumerable = false
    value: 张三,
    set() {},  赋值触发  vue 中可以
    get() {}   取值触发
} )
```
- 缺点
    - 无法监测到对象属性的动态添加和删除
    - 无法监测到数组下标和length属性的变化
- 解决方法
    - Vue.set() 用于动态给对象添加属性
    - Vue.delete() 用于动态给对象删除属性
    - 重写vue中数组的方法 'push 等等', 用于监测数据的变更
### 2.2 Vue 3.0 中响应式的原理
- Vue 3.0 中使用ES6中的 proxy语法 实现数据的响应
- 优点
    - 可以监测到对象属性的动态添加和删除
    - 可以监测到数组下标和length属性的变化
- 缺点
    - 对低版本不支持 IE 11
    - vue 3.0 会出一个针对 IE 11 的特殊版本来支持 
- Vue 3.0 中使用 proxy 方法实现数据的响应
```js
var target = {
   name: 'poetries'
}
var logHandler = {
    get: function(target, key) {
        console.log(`${key} 被读取`)
        return target[key]
    },
    set: function(target, key, value) {
        console.log(`${key} 被设置为 ${value}`)
        target[key] = value
    },
    deleteProperty(targer, key) {
        console.log(`监测到删除${key}`)
        return delete target[key]
    }
}
 var targetWithLog = new Proxy(target, logHandler)
 
 targetWithLog.name // 控制台输出：name 被读取
 targetWithLog.name = 'others' // 控制台输出：name 被设置为 others
 
 console.log(target.name) // 控制台输出: others
``` 

## 3. 创建 3.0 项目
### 3.1 用最新的脚手架 直接创建  第一步会让你选 创建 vue 2 还是 3  的项目
```sh
# 升级最新的脚手架

sudo npm update -g @vue/cli
vue -V
vue create hello-vue3
# select vue 3 preset

```
### 3.2 使用 vite

> 1. Vite 是一个由原生 ESM(ES6标准的模块化规范) 驱动的 web开发构建工具 在开发环境下基于浏览器原生 ES imports 开发 在生产环境下基于 Eollup 打包
> 2. Vite 目前仅支持 vue 3.0 项目 不支持 2.0
> 3. Vite 基本使用
```sh

npm init vite hello-vue3 
# OR yarn create vite-app hello-vue3

cd hello-vue3
npm i

```
> 4. [有了Vite , 还需要 webpack吗?](https://zhuanlan.zhihu.com/p/150083887)

## 4. Composition API 的使用
### 4.1 Compositon API (3.0) VS option API (2.0) 
- 1. Option API 选项 API 
    - 1. 优点是容易学和使用 代码有明确的书写位置
    - 2. 缺点是相似的逻辑不易复用 尤其是在大型项目中
    - 3. 可以通过 mixins 提取相同的逻辑 但是容易发生命名冲突且来源不清晰
- 2. Composition API 组合 API
    - 1. 它是根据功能逻辑来组织代码的 一个功能所有的api放在一起
    - 2. 即便项目很大 功能很多 都能够快速定位到该功能的所有api
    - 3. 提供了代码可读性 和 可维护性
- 3. Vue 3.0 中推荐使用 composition api 同时也保留了 option api
### 4.2 setup
- Setup 函数是一个新的组件选项, 作为 composition API 的起点
- 从生命周期的角度讲 setup 会在 beforeCreate 钩子前执行
- 此时 没有 this
```js
export default {
    setup () {
        console.log('setup 执行了')
        console.log(this) // undefined
    }
}
``` 
### 4.3 reactive
- Reactive 函数接受一个普通的对象 会返回该对象响应式的代理
```js
import { reactive } from 'vue'
export default {
    setup () {
        // setup 需要返回值 返回的数据才能在模板中使用
        // 普通的返回对象没有响应式  需要 reactive 包裹
        const car = reactive({
            brand: '汽车',
            price: 2000
        })
        return {
            car
        }
    }
}
```

### 4.4 ref 
- ref 函数接收一个简单类型 返回一个响应式对象
- 这个对象只有一个 value 属性
- 在模板中会自动解套 不需要 value js中需要 .value
```js
<template>
    <div>
        <p>{{ money }}</p>
        <button @click="money++">修改</button>
    </div>
</template>
import { ref } from 'vue'
export default {
    setup () {
        let money = ref(100)
        money.value ++ 
        return {
            money
        }
    }
}
```

### 4.5 toRefs
- 把一个响应式对象转换成普通对象, 该普通对象的没个 property 都是一个 ref
- Reactive 的响应式功能是赋予对象的, 但是如果给对象解构或者展开的时候, 就会让数据丢失响应的能力
- 使用 toRefs 可以保证该对象展开的每一个属性都是响应式的
```js
import { refs, reactive } from 'vue'
export defaule {
    setup () {
        const state = reactive({
            money: 1000,
            car: {
                brand: '宝马',
                price: 100000
            },
            name: '查娜'
        })
        return {
            ...toRefs(state)
        }
    }
}

```

### 4.6 readOnly
- 传入一个对象(响应式或普通) 或 ref, 返回一个原始对象的自读代理
- 一个只读对象是 深层的, 对象内部任何嵌套的属性也都是自读的
- 可以防止对象被修改
```js
import { ref, readOnly } from 'vue'
export default {
    setup () {
        const money = ref(100)
        
        return {
            money: readOnly(money)
        }

    }
}
```

### 4.7 计算属性 computed
- Computed 函数用于创建一个计算属性
- 如果传入的是一个 getter函数, 会返回一个不允许修改的计算属性
- 如果传入的是一个带有 getter 和 setter函数的对象, 返回一个允许修改的计算属性
```js
import { ref, computed } from 'vue'
export default {
    setup () {
        const age = ref(18)
        // 1. 传入的是一个函数的 getter 返回的是一个不允许修改的计算属性
        const nextage = computed(() => {
            return age.value + 1
        })
        // 2. 传入一个函数的 get 和 set , 可以创建一个可以修改的计算属性
        const nextage2 = computed(() => {
            get () {
                return parseInt(age.value) + 2
            },
            set (val) {
                age.value = val - 2
            }
        })
        return {
            age,
            nextage
        }
    }
}
```

### 4.8 监听属性 Watch
- Watch 函数接受3个参数
    - 参数一: 数据源, 可以是 ref, reactive 或者 getter 函数
    - 参数二: 回调函数
    - 参数三: 额外选项, immediate  和 deep
- Watch 可以监听一个 ref 或者一个带有返回值的 getter 函数
- Wacht 可以监听单个数据源, 也可以监听多个数据源
- Watch 函数会有返回值, 用于停止监听
```js
import { ref, reactive, toRefs, watch } from 'vue'
export default {
  setup () {
    let money = ref(100)
    const state = reactive({
        money0: 1000,
        car: {
            brand: '宝马',
            price: 1000000,
        }
    })
    // 监听一般的 ref
    watch(money, (newVal) => {
        console.log(newVal, '一般的ref变了...')
    })
    // 监听包裹的基本类型
    watch(() => state.money0, (newVal) => {
        console.log(newVal, '包裹的基本类型变了...')
    })
    // 监听的包裹对象 需要 deep 参数
    watch(() => state.car, (newVal) => {
        console.log(newVal, '监听的对象变了...')
    }, {
        deep: true
    })
    // 监听包裹对象 的某一个属性
    watch(() => state.car.brand, (newVal) => {
        console.log(newVal, '监听的对象的某个属性变了...')
    })
    // 一次监听多个属性 
    watch([money,() => state.money0, () => state.car,],([money, car]) => {
        console.log(money, car, '监听多个属性...')
    }, {
        deep: true
    })
    // 直接监听一个 reactive  一般不用
    watch(state, (val) => {
        console.log(val, '监听的 reactive变化了... ')
    }, {
        deep: true
    }) 
    return {
        money,
        ...toRefs(state)
    }
  }
}
```
### 4.9 Lifecycle Hooks
- 只能在 setup() 中使用
- 3.0 对比 2.0
    - beforeCreate ->  setup()
    - created -> setup()
    - beforeMount -> onBeforeMount
    - mounted -> onMounted
    - beforeUpdate -> onBeforeUpdate
    - updated -> onUpdated
    - beforeDestroy -> onBeforeUnmount
    - destroyed -> onUnmounted
    - activated -> onActivated
    - deactivated -> onDeactivated
    - errorCaptured -> onErrorCaptured
```js
import { onMounted } from 'vue'
export default {
    setup () {
        onMounted(() => {
            console.log('加载好了')
        })
        return {

        }
    }
}
```

### 4.10依赖注入 inject 和 provide
- 实现组件之间的通讯
- 3.0 中 的 provide 和 inject 可以用于跨多级组件进行通讯
```js
// 父组件 provide 提供
setup () {
    const moeny = ref(100)
    const changeMoeny = (val) => {
        moeny.value = val
    }
    provide('money', moeny)
    // 当然而已可以提供方法
    provide('changeMoeny', changeMoeny)
}
// 子组件或者孙子组件 inject 注入
setup () {
    const money = inject('moeny')
    const changeMoeny = inject('changeMoeny')
    return {
        money
    }
}

```

### 4.11 模板 refs 的使用
```js
<template>
    <h1 ref="hRef">你好啊哈哈</h1>
</template>
<script>
import { ref } from 'vue'
export default {
    setup () {
        // 创建一个空的 ref
        const hRef = ref(null)
        onMounted(() => {
            console.log(hRef.value.innerHTML) // 你好啊哈哈
        })
    }
}
</script>
```


##  5 注册组件 和以前一样 注意和 setup 同级别
```
import Demo from './demo'
export default {
    components: {
        Demo
    }
    setup () {

    }
}
```

## 参数定义和接收
```js
// 父组件定义
<Demo :moeny="moeny"></Demo>

// 子组件接收
setup (props) {
    consolg.log(props)
}
props: {
    money: Number
}
```

## 定义方法
```js
import {}
setup () {

    const delTodo = (id) => {
        console.log('del', id)
    }
    // 只要模板中使用的  不管是属性还是方法 都要返回
    return {
        deltode
    }
}
```

## table 渲染

- https://www.antdv.com/components/table-cn







