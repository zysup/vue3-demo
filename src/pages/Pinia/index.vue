<template>
  <div class="page-pinia">
    <van-nav-bar title="Pinia Example" left-arrow @click-left="onClickLeft" />
    <div>
      <A />
      <hr />
      <B />
    </div>
    <hr />
    <p class="user-info">{{ userStore.userInfo }}</p>
    <van-button @click="clearStore">清空</van-button>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/userStore'
import { useCarStore } from '@/store/useCarStore'

import A from './A.vue'

import B from './B.vue'

const onClickLeft = () => history.back()

const userStore = useUserStore()
console.log('userStore', userStore)

const carStore = useCarStore()
console.log('carStore', carStore)

const clearStore = () => {
  console.log('清空 Pinia store')
  // userStore.$reset()
  userStore.$state = { id: '', name: 'zhansan123', age: 138, token: '', isLogin: false }
  carStore.$state = { cars: [], selectedCarId: '' }
}
</script>
