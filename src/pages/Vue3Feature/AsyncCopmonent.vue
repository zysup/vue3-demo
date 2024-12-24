<template>
  <div>
    AsyncCopmonent
    <hr />
    <img src="@/assets/redgirl.png" alt="" />
  </div>
</template>

<script setup lang="ts">
console.log('qwe AsyncCopmonent')
import arrayMap from 'array-map-abc'
const bbb = arrayMap([1, 2, 3], (item) => item * 2)
console.log('bbb', bbb)
</script>
