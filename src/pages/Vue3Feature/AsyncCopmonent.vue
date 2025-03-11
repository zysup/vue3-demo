<template>
  <div class="async-copmonent">
    AsyncCopmonent
    <hr />
    <img src="@/assets/redgirl.png?base64" alt="" />
    <img src="./img/vue.svg" alt="" />
    <img src="./img/vue.svg?no-inline" alt="" />
    <img src="./img/vue.svg?base64" alt="" />
    <!-- <img src="noinline" alt="" /> -->

    <div v-for="n in imgs">
      <img :src="abc(n.src)" alt="qwe" />
    </div>
    <!-- <img :src="`/src/assets/${name}.png`" alt="" /> -->
  </div>
</template>

<script setup lang="ts">
console.log('qwe AsyncCopmonent')
// import { arrayMap } from 'array-map-abc'
// const bbb = arrayMap([1, 2, 3], (item: number) => item * 2)
// console.log('bbb', bbb)

const imgs = [{ src: 'w_1.png' }, { src: 'w_2.png' }]
function abc(n: string) {
  return new URL(`./img/${n}`, import.meta.url).href
}
// const name = 'redgirl'

import raw from './img/vue.svg?raw'
//@ts-ignorets-ignore
import noinline from './img/vue.svg?no-inline'
import inline from '@/assets/redgirl.png?inline'
console.log('qwe raw', raw)
console.log('qwe noinline', noinline)
console.log('qwe inline', inline)
</script>

<style scoped lang="scss">
.async-copmonent {
  background-color: antiquewhite;
}
</style>
