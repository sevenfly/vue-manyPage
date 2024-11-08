<template>
  <div class="main">play-page</div>
  <FunctionSetup ref="functionSetup" />
  <ScriptSetup ref="scriptSetup" />
  <br /><br /><br /><br />
  <button @click="clickHandle">测试组件的调用</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import FunctionSetup from './components/setup.vue'
import ScriptSetup from './components/scriptSetup.vue'

const functionSetup = ref(null)
const scriptSetup = ref(null)

onMounted(() => {
  console.log('play-page')
  console.log('functionSetup', functionSetup.value)
  console.log('scriptSetup', scriptSetup.value)
})
function clickHandle() {
  functionSetup.value.handleClick()
  scriptSetup.value.handleClick()
}
</script>
