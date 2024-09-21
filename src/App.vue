<!--
@file 项目入口文件
@author Router
-->

<template>
  <RouterView class="qwe" />
  <van-tabbar route v-show="route.meta.showFooter">
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="setting-o">关于</van-tabbar-item>
    <van-tabbar-item replace to="/mycenter" icon="user-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
const route = useRoute()
</script>
