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
    <van-button type="primary" @click="hellojsLogin">Google Login</van-button>
  </div>
</template>

<script setup lang="ts">
const GOOGLE_CLIENT_ID = '278327607206-0i9241asfd41bcd2ueovopsq71c7h083.apps.googleusercontent.com'
import hellojs from 'hellojs/dist/hello.all.js'
hellojs.init(
  {
    google: GOOGLE_CLIENT_ID,
  },
  { redirect_uri: 'https://zysup.github.io' },
)

const onClickLeft = () => history.back()

const hellojsLogin = () => {
  hellojs('google')
    .login()
    .then(
      function () {
        alert('You are signed in to Facebook')
        hellojs('facebook')
          .api('me')
          .then(
            function (json) {
              alert('Your name is ' + json.name)
            },
            function (e) {
              alert('Whoops! ' + e.error.message)
            },
          )
      },
      function (e) {
        alert('Signin error: ' + e.error.message)
      },
    )
}
</script>
