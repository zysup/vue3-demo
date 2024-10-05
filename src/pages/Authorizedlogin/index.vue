<!--
  @file 贪吃蛇
  @author Router
  https://developers.facebook.com/docs/facebook-login/web/js-example
-->

<template>
  <div class="page-authorized-login">
    <van-nav-bar title="Authorizedlogin" left-arrow @click-left="onClickLeft" />
    <van-button type="primary" onclick="checkLoginState()">Facebook Login</van-button>
  </div>
</template>

<script setup lang="ts">
const onClickLeft = () => history.back()
</script>
