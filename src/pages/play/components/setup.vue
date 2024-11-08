<template>
  <h1>{{ message }}</h1>
  <h2>count：{{ count }}</h2>
  <button @click="handleClick">点击</button>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('我是setup()形式')
    const count = ref(0)
    function handleClick() {
      count.value++
    }

    return {
      message,
      count,
      handleClick
    }
  }
}
</script>
