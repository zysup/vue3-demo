<template>
  <div class="page-mycenter">
    <van-nav-bar title="My Center" left-arrow @click-left="onClickLeft" />
    <img src="@/assets/redgirl.png" alt="" />

    <br />
    <br />
    <Transition name="slide-left1" enter-active-class="asdf">
      <img src="@/assets/redgirl.png" alt="" v-if="show" /><img src="@/assets/erba.png" alt="" v-else />
    </Transition>
    <button @click="show = !show">改变</button>
    <img src="/vite.svg" alt="" />
    <div class="img-box"></div>
  </div>
</template>

<script setup lang="ts">
const show = ref(true)
const onClickLeft = () => history.back()
</script>

<style scoped>
.img-box {
  height: 100px;
  background: url(/vite123.svg);
  background: url('@/assets/redgirl.png') no-repeat center/cover;
}
img {
  height: 200px;
  width: 100%;
}
.slide-left1-enter-active,
.slide-left1-leave-active {
  position: relative;
  transition: all 10s ease-out;
}
.slide-left1-enter-to {
  /* transform: translateY(-100%); */
}
.slide-left1-enter-from {
  opacity: 0;
  transform: translateX(375px);
}
.slide-left1-leave-to {
  opacity: 0;
  transform: translateX(-375px);
}
.asdf {
  outline: 2px solid red;
}
</style>
