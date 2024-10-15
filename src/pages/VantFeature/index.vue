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
    </div>
  </div>
</template>
<script setup lang="ts" name="VantFeature">
const onClickLeft = () => history.back()

function handleClick(evt: MouseEvent) {
  console.log('qwe', evt)
}
// window.handleOnClick = function name(evt: MouseEvent) {
//   console.log('qwe 2', evt)
// }
</script>
