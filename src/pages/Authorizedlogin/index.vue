<!--
  @file 授权登录
  @author Router
-->

<template>
  <div class="page-authorized-login">
    <van-nav-bar title="Authorizedlogin" left-arrow @click-left="onClickLeft" />
    <van-button type="primary" onclick="checkLoginState()">Facebook Login</van-button>
    <van-divider />
    <van-button type="primary" onclick="initializeGoogleSignIn()">Google Login</van-button>
    <div id="google-login-button"></div>
    <van-divider />
  </div>
</template>

<script setup></script>
