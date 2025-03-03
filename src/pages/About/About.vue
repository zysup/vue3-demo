<template>
  <div>about</div>
  <van-button type="primary" @click="$router.back()">my.navigateTo</van-button>
  <van-button type="primary" @click="$router.push({ params: { a: 1 } })">my.navigateTo params: { a: 1 }</van-button>
  <van-button type="primary" @click="$router.push({ params: { a: 2 } })">my.navigateTo params: { a: 2 }</van-button>
  <van-button type="primary" @click="$router.push({ query: { b: 2 } })">my.navigateTo query: { b: 2 }</van-button>
  <van-button type="primary" @click="$router.push({ query: { c: 3 } })">my.navigateTo query: { c: 3 }</van-button>
  <van-button type="primary" @click="$router.replace({ query: { b: 2, c: 4 } })"
    >my.navigateTo query: { b: 2, c: 4 } }</van-button
  >

  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
const route = useRoute()
// console.log('qwe router', router)
// watch([() => route.query.b, () => route.params.a], (nv) => {
//   console.log('router', nv)
// })
watch(
  () => route.params.a,
  (nv) => {
    console.log('router', nv, route)
  },
)
</script>
