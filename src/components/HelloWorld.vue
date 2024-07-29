<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- <textarea>{{ count }}</textarea> -->
    <button type="button" @click="count++">count is {{ count }}==={{ double }}</button>
    <p class="bg-blue-500 text-red-400 tw-pt-8 text-base leading-7 bg-clip-text font-semibold">Edit</p>
    <code
      class="my-code bg-green-700 text-red-400 hover:bg-sky-800 py-px text-base leading-7 sm:py-3 px-20 font-semibold sm:px-8"
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
  <van-button type="primary" @click="handleClick" size="small">主要按钮</van-button>
  <!-- <button @click="handleClick">按钮</button> -->
  <van-cell-group :foo="count">
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </van-cell-group>
  <van-grid>
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />
  </van-grid>
  <van-button type="primary" text="组件调用" @click="showNotify1" />
  <van-button type="primary" text="showDialog" @click="onClick2" />
  <div class="mt-20 h-12 overflow-hidden outline outline-1">
    <van-notify v-model:show="show" type="success">
      <van-icon name="bell" style="margin-right: 4px" />
      <span>通知内容</span>
    </van-notify>
  </div>
  <div class="nihao text-28">你好</div>
  <div class="pt-98 w-a rud w-100 rounded-30 px-38 leading-1.3" style="outline: 3px solid blue">世界</div>
  <div class="mt-38 h-374 bg-black bg-opacity-30"></div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { showToast, showSuccessToast, showDialog } from 'vant'

defineProps({
  msg: String,
})
const count = ref(0)
// var aaaa = 12
// const aaa = aaa()
window.bbb = 'qwe'

const double = computed(() => count.value * 2)
function handleClick() {
  showToast({
    message: '自定义图标',
    icon: 'like-o',
    duration: 100000,
  })
  showSuccessToast('成功文案')
  // showNotify({ message: '提示' })
}
const show = ref(false)
const showNotify1 = () => {
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 2000)
}
const onClick2 = () => {
  showDialog({ title: '提示', message: 'HelloWorld' })
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
.nihao {
  @apply text-right;
  // width: 100px;
  width: 375px;
  outline: 1px solid red;
  border-width: 1px;
}
</style>
