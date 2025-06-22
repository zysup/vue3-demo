<template>
  <div>
    <h2>Component B</h2>
    <p>Count: {{ state.age }}</p>
    <p>getters.getAge: {{ getters123.getAge() }}</p>
    <van-button @click="actions.reset">Reset</van-button>
    <van-button @click="setAge">setAge</van-button>
    <p>Computed aaa: {{ aaa }}</p>
  </div>
</template>
<script setup lang="ts">
import { state, actions, getters123 } from './store'
const setAge = () => {
  actions.setAge(28)
  console.log('qwe ', getters123.getAge(), state.age)
}
const aaa = computed(() => {
  console.log('computed aaa')
  return getters123.getAge()
})
</script>
