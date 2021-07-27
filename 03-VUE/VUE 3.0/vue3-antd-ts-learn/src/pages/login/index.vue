<template>
  <h1>{{ count }}</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Login',
  setup: () => {
    const count = ref(100)
    return { count }
  }
})
</script>

<style scoped>

</style>
