<template>
  <div>
    My Center

    <img src="@/assets/redgirl.png" alt="" />

    <br />
    <br />
    <Transition name="slide-left1" enter-active-class="asdf">
      <img src="@/assets/redgirl.png" alt="" v-if="show" /><img src="@/assets/erba.png" alt="" v-else />
    </Transition>
    <button @click="show = !show">改变</button>
  </div>
</template>

<script setup lang="ts">
const show = ref(true)
</script>

<style scoped>
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
