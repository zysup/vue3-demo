const clientId = '278327607206-0i9241asfd41bcd2ueovopsq71c7h083.apps.googleusercontent.com'
const script = document.createElement('script')
const handleGoogleSignIn = (response) => {
  // 处理Google登录成功的响应
  console.log('Google登录成功', response)
}
const handleGoogleSignInCancel = () => {
  // 处理Google登录取消
  console.log('Google登录被取消')
}
const initializeGoogleSignIn = (client_id) => {
  window.google.accounts.id.initialize({
    client_id,
    cancel_on_tap_outside: true, // 控制是否在提示之外进行点击时取消提示(关闭一键登录弹窗)，默认true
    auto_select: true, // 开启自动登录功能，默认false
    callback: handleGoogleSignIn, // 验证成功回调
    cancel: handleGoogleSignInCancel,
  })
  // 渲染“使用 Google 帐号登录”按钮
  window.google.accounts.id.renderButton(document.getElementById('google-login-button'), {
    theme: 'outline',
    size: 'large',
    text: 'login_with',
    shape: 'rectangular',
  })
  // 启用一键登录提示(弹窗)功能
  window.google.accounts.id.prompt()
}
if (window.google) {
  initializeGoogleSignIn(clientId)
} else {
  script.src = 'https://accounts.google.com/gsi/client' // 加载客户端库
  script.async = true
  script.onload = () => initializeGoogleSignIn(clientId)
  document.head.appendChild(script)
}
