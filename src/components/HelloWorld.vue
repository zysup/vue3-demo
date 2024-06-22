<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}==={{ double }}</button>
    <p class="bg-blue-500 text-red-400 tw-pt-8 bg-clip-text text-base font-semibold leading-7">Edit</p>
    <code
      class="my-code bg-green-700 text-red-400 hover:bg-sky-800 px-20 py-px text-base font-semibold leading-7 sm:px-8 sm:py-3"
    >
      compon ents/HelloWorld.vue
      <span>123</span>
    </code>
    to test "HMR"
    <span>567</span>
    <ul>
      <li class="text-rose-500">01</li>
      <li>02</li>
      <li :class="true ? 'btn-primary' : 'qwe'">03</li>
    </ul>
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
  <p class="tw-bg-sky-500 hover:bg-sky-700 bg-purple landscape:hidden">asdf</p>
  <p class="border-r-purple text-abc-1 text-current empty:border"></p>
  <input class="hover:border-black hover:bg-black focus:border-white focus:bg-white" />
  <van-button type="primary" @click="handleClick">主要按钮</van-button>
  <!-- <button @click="handleClick">按钮</button> -->
  <van-cell-group>
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// import { showToast, showDialog } from 'vant'

defineProps({
  msg: String,
})
const count = ref(0)

const aaa = aaa()

const double = computed(() => count.value * 2)
function handleClick() {
  showToast('No need to import showToast')
}
</script>

<style scoped lang="scss">
.read-the-docs {
  color: blue;
}
.my-code {
  // @apply bg-red-500 #{!important};
  span {
    color: yellow;
  }
}
.bg-sky-500 {
  background-color: #0ea5e9;
}
.hover\:bg-sky-700:hover {
  background-color: red;
}
</style>
