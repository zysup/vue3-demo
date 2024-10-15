<!--
  @file 授权登录
  @author Router
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
