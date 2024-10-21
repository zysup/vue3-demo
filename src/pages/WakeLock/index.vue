<template>
  <div class="page-wakelock flex flex-col">
    <van-nav-bar title="Vue3 feature" left-arrow @click-left="onClickLeft" />
    <div class="bg-gray p-10">
      <van-radio-group v-model="radioVlaue" @change="changeStatus">
        <van-radio :name="1">不息屏</van-radio><br />
        <van-radio :name="2">默认设置</van-radio>
      </van-radio-group>
    </div>
  </div>
</template>

<script setup>
import { showToast, showFailToast } from 'vant'
const wakeLock = ref(null)
const radioVlaue = ref(1)
const onClickLeft = () => history.back()

function changeStatus() {
  console.log('qwe999999999')
  if (navigator.wakeLock) {
    if (radioVlaue.value == 1) {
      setWakeLock()
    } else {
      wakeLock.value.release().then(() => {
        console.log('qwe0')
        wakeLock.value = null
      })
    }
  }
}
function setWakeLock() {
  console.log('qwe', wakeLock.value)
  if (wakeLock.value) {
    return
  }
  navigator.wakeLock
    .request('screen')
    .then((result) => {
      wakeLock.value = result
      showToast('唤醒锁定已激活')
      wakeLock.value.addEventListener('release', () => {
        // wakeLock.value = null
        // radioVlaue.value = 2
        showToast('唤醒锁定已释放')
      })
    })
    .catch((err) => {
      showFailToast(`唤醒锁定失败：${err.message}`)
    })
}

setWakeLock()
onMounted(() => {
  if (navigator.wakeLock) {
    // 选项卡切换到当前页面，如果已经释放了熄屏，再次锁定
    document.addEventListener('visibilitychange', (e) => {
      console.log('qwe', document.visibilityState, radioVlaue.value)
      if (wakeLock.value === null && document.visibilityState === 'visible' && radioVlaue.value == 1) {
        console.log('qwe123')
        // setWakeLock()
      }
    })
  } else {
    showFailToast('当前浏览器不支持Screen Wake Lock API！')
  }
  console.log('qwe123456')
})
onUnmounted(() => {
  console.log('qwe onUnmounted')
})
</script>
