<template>
  <h1>{{ message }}</h1>
  <h2>count：{{ count }}</h2>
  <button @click="handleClick">点击</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('我是script setup形式1')
const count = ref(0)
function handleClick() {
  count.value++
}
</script>
