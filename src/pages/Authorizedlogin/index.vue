<!--
  @file 授权登录
  @author Router
-->

<template>
  <div class="page-authorized-login">
    <van-nav-bar title="Authorizedlogin" left-arrow @click-left="onClickLeft" />
    <van-button type="primary" onclick="checkLoginState()">Facebook Login</van-button>
    <van-divider />
    <van-button type="primary" onclick="initializeGoogleSignIn()">一键式登录 Google Login</van-button>
    <div id="google-login-button"></div>
    <van-divider />
    <van-button type="primary" onclick="manualLogin()">手动触发 Google Login</van-button>
    <van-divider />
    <van-button type="primary" onclick="ImplicitGrant()">手动触发 Google Login 隐式授权</van-button>
  </div>
</template>
<script setup>
const onClickLeft = () => history.back()
</script>
