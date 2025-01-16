<template>
  <div class="page-webviewpage">
    <van-nav-bar title="Vue3 feature" left-arrow @click-left="onClickLeft" /> <br />
    <van-button type="primary" @click="navigateTo">my.navigateTo</van-button> <br />
    <van-button type="primary" @click="postMessage">my.postMessage</van-button> <br />
    <van-button type="primary" @click="getEnv">my.getEnv</van-button> <br />
    <van-button type="primary" @click="startShare">my.startShare</van-button>
  </div>
</template>

<script setup lang="ts">
import { loadScript } from '@/utils/index.ts'

const onClickLeft = () => history.back()
loadScript('https://appx/web-view.min.js', 5000, () => {
  console.log('script loaded')
  my.onMessage = function (e: any) {
    console.log(e) // {'sendToWebView': '1'}
  }
})
function navigateTo() {
  my.navigateTo({ url: '../add-todo/add-todo' })
}
function postMessage() {
  my.postMessage({ name: '测试web-view' })
}
function getEnv() {
  my.getEnv(function (res: any) {
    console.log(res)
  })
}
function startShare() {
  my.startShare()
}
</script>
