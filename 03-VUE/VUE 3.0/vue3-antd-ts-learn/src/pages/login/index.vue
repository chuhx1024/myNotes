<template>
  <h1>{{ count0 }}-- {{count}}</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Login',
  setup: () => {
    const count0 = ref(100)
    return { count0 }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
})
</script>

<style scoped>

</style>
