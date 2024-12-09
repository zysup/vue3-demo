import { showToast } from 'vant'

const clientId = '278327607206-0i9241asfd41bcd2ueovopsq71c7h083.apps.googleusercontent.com'
const script = document.createElement('script')
const handleGoogleSignIn = (response) => {
  // 处理Google登录成功的响应
  console.log('Google登录成功', response)
  let strings = response.credential.split('.') //截取token，获取载体
  var userinfo = JSON.parse(decodeURIComponent(escape(window.atob(strings[1].replace(/-/g, '+').replace(/_/g, '/'))))) //解析，需要吧‘_’,'-'进行转换否则会无法解析

  console.log('qwe', userinfo)
  showToast({ message: '登录成功 ' + JSON.stringify(userinfo, null, 2), duration: 4000 })
}
const handleGoogleSignInCancel = () => {
  // 处理Google登录取消
  console.log('Google登录被取消')
}
window.initializeGoogleSignIn = (client_id = clientId) => {
  console.log('qwe', client_id)
  window.google.accounts.id.initialize({
    client_id,
    cancel_on_tap_outside: true, // 控制是否在提示之外进行点击时取消提示(关闭一键登录弹窗)，默认true
    auto_select: true, // 开启自动登录功能，默认false
    callback: handleGoogleSignIn, // 验证成功回调
    cancel: handleGoogleSignInCancel,
  })
  // 渲染“使用 Google 帐号登录”按钮
  // window.google.accounts.id.renderButton(document.getElementById('google-login-button'), {
  //   theme: 'outline',
  //   size: 'large',
  //   text: 'login_with',
  //   shape: 'rectangular',
  // })
  // 启用一键登录提示(弹窗)功能
  window.google.accounts.id.prompt((notification) => {
    console.log('qwe notification', notification)
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      console.log('qwe notification.isNotDisplayed()', notification.isNotDisplayed())
      console.log('qwe notification.isSkippedMoment()', notification.isSkippedMoment())
      // continue with another identity provider.
    }
  })
}
if (window.google) {
  // initializeGoogleSignIn(clientId)
} else {
  script.src = 'https://accounts.google.com/gsi/client' // 加载客户端库
  script.async = true
  // script.onload = () => initializeGoogleSignIn(clientId)
  // script.onload = () => {
  //   console.log('google 登录sdk加载完成')
  //   initializeGoogleSignIn()
  // }
  document.head.appendChild(script)
}
