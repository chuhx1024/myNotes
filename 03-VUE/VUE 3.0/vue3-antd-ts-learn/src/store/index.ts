import { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 99
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store