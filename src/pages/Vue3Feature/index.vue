<!--
@file vue3特性
@author Router
-->

<template>
  <div class="page-vue3-feature flex flex-col">
    <van-nav-bar title="Vue3 feature" left-arrow @click-left="onClickLeft" />
    <img src="@/assets/icons/comment.svg" alt="" />
    <img src="@/assets/icons/arrow-alt-circle-right.svg" alt="" />
    <img src="./img/vue.svg" alt="" />
    <hr />
    <van-button type="primary" @click="showAsyncCopmonent = !showAsyncCopmonent">show AsyncCopmonent</van-button>
    <AsyncCopmonent v-if="showAsyncCopmonent" />
    <van-button type="primary" @click="$router.back()">my.navigateTo</van-button>
    <div class="bg-gray-100 flex gap-4 overflow-auto p-4"></div>
  </div>
</template>
<script setup lang="ts">
const AsyncCopmonent = defineAsyncComponent(() => import('./AsyncCopmonent.vue'))
const showAsyncCopmonent = ref(false)
const onClickLeft = () => history.back()
</script>
<style scoped lang="scss">
.page-vue3-feature {
  outline: 2px solid red;
  outline-offset: -2px;
  img {
    width: 2em;
    height: 2em;
  }
}
</style>
