<template>
  <div class="page-vant-feature">
    <van-nav-bar title="Vue3 feature" left-arrow @click-left="onClickLeft" />
    <div>
      <van-button type="primary" size="large" @click="handleClick" onclick="handleOnClick(this)">大号按钮</van-button>
      <van-button type="primary" size="normal">普通按钮</van-button>
      <van-button type="primary" size="small">小型按钮</van-button>
      <van-button type="primary" size="mini">迷你按钮</van-button>
      <van-button type="primary" url="https://github.com">URL 跳转</van-button>
      <van-button type="primary" :to="{ name: 'MyCenter' }">路由跳转</van-button>
      <!--  -->
      <van-button plain icon="https://dummyimage.com/60x40/000/fff&text=aaaa" type="primary" disabled>
        按钮
      </van-button>
      <van-icon name="chat-o" />
    </div>
    <br /><br />
    <div class="van-safe-area-bottom weq">qwe</div>

    <div class="van-haptics-feedback" style="background-color: red">adasd</div>
  </div>
</template>
<script setup lang="ts" name="VantFeature">
import { showToast, showFailToast } from 'vant'
const onClickLeft = () => history.back()

function handleClick(evt: MouseEvent) {
  console.log('qwe', evt)
}
// window.handleOnClick = function name(evt: MouseEvent) {
//   console.log('qwe 2', evt)
// }

showFailToast({
  // duration: 5000,
  message: 'opps somethig wrong asfd asd fasd fasdf as fsf ',
  // icon: 'warning-o',
  icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
  iconSize: '2em',
})
</script>
