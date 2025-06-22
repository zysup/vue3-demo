<template>
  <div>
    <h2>Component A</h2>
    <p>Count: {{ state.age }}</p>
    <van-button @click="actions.reset">Reset</van-button>
    <van-button @click="actions.setAge(28)">setAge</van-button>
  </div>
</template>
<script setup lang="ts">
import { state, actions } from './store'
// const state = useStore()
</script>
