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
    <p class="bg-blue-500 pt-8 text-base font-semibold leading-7 text-red-400">
      Edit
      <code
        class="my-code bg-green-700 px-4 py-1 pt-8 text-base font-semibold leading-7 text-red-400 hover:bg-sky-800 sm:px-8 sm:py-3"
        >compon ents/HelloWorld.vue</code
      >
      to test "HMR"
    </p>
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
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.my-code {
  @apply bg-red-500 !important;
}
</style>
