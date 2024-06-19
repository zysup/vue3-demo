<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  msg: String,
})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p class="bg-blue-500 bg-clip-text pt-8 text-base font-semibold leading-7 text-red-400">Edit</p>
    <code
      class="my-code bg-green-700 px-20 py-1 pt-4 text-base font-semibold leading-7 text-red-400 hover:bg-sky-800 sm:px-8 sm:py-3"
    >
      compon ents/HelloWorld.vue
      <span>123</span>
    </code>
    to test "HMR"
    <span>567</span>
    <ul>
      <li>01</li>
      <li>02</li>
      <li>03</li>
    </ul>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <p class="bg-sky-500 hover:bg-sky-700 landscape:hidden">asdf</p>
  <p class="border-red-700 empty:border"></p>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
.my-code {
  @apply bg-red-500 #{!important};
  span {
    color: yellow;
  }
}
.bg-sky-500 {
  background-color: #0ea5e9;
}
.hover\:bg-sky-700:hover {
  background-color: red;
}
</style>
