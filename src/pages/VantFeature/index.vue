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

    <br />
    <van-tabs v-model:active="active" swipeable>
      <van-tab v-for="index in 4" :title="'标签 ' + index">
        <div style="height: 100px; background-color: cadetblue">
          <p>内容 {{ index }}</p>
          <!-- <div style="width: 100%; overflow: hidden" @scroll.stop> -->
          <ul class="tab-ul" @touchmove.stop>
            <li>01</li>
            <li>02</li>
            <li>03</li>
            <li>04</li>
            <li>05</li>
          </ul>
          <!-- </div> -->
        </div>
      </van-tab>
    </van-tabs>

    <ul class="tab-ul">
      <li>01</li>
      <li>02</li>
      <li>03</li>
      <li>04</li>
      <li>05</li>
    </ul>
  </div>
</template>
<script setup lang="ts" name="VantFeature">
import { showFailToast } from 'vant'
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

const active = ref(1)
</script>

<style scoped lang="scss">
.tab-ul {
  outline: 1px solid red;
  outline-offset: -2px;
  width: 300px;
  overflow-x: scroll;
  white-space: nowrap;
  li {
    display: inline-block;
    height: 50px;
    width: 100px;
    background-color: burlywood;
    vertical-align: top;
  }
}
</style>
<style>
.tab-ul {
  /* overflow: hidden; 隐藏滚动条 */
  /* -ms-overflow-style: none; 适用于 Internet Explorer 和 Edge */
  scrollbar-width: none; /*适用于 Firefox*/
}

.tab-ul::-webkit-scrollbar {
  display: none; /* 适用于 Chrome, Safari 和 Opera */
}
</style>
