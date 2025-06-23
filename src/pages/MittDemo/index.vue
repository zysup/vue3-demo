<template>
  <div class="page-mittdemo">
    <van-nav-bar title="MittDemo" left-arrow @click-left="onClickLeft" />
    <div class="mitt-demo">
      <h2>mitt 事件通信 Demo</h2>
      <button @click="sendEvent">发送事件</button>
      <p>接收到的消息：{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import emitter, { Events } from '@/utils/mitter'

const message = ref('')

function sendEvent() {
  emitter.emit('custom-event', 'Hello from mitt!')
}

function onCustomEvent(payload: Events['custom-event']) {
  message.value = payload
}

onMounted(() => {
  emitter.on('custom-event', onCustomEvent)
})

onUnmounted(() => {
  emitter.off('custom-event', onCustomEvent)
})
function onClickLeft() {
  history.back()
}
</script>

<style scoped>
.mitt-demo {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 40px auto;
  /* background: #f9f9f9; */
}
button {
  margin-bottom: 16px;
}
</style>
