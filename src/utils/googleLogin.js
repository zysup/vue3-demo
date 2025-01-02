import { showToast } from 'vant'

const clientId = '278327607206-0i9241asfd41bcd2ueovopsq71c7h083.apps.googleusercontent.com'
const clientSecret = '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'
let redirectUri = 'https://zysup.github.io'
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
    console.log('qwe notification.isNotDisplayed()', notification.isNotDisplayed())
    console.log('qwe notification.isSkippedMoment()', notification.isSkippedMoment())
    if (notification.g === 'skipped' && notification.l === 'unknown_reason') {
      console.log('qwe 触发手动登录')
      manualLogin()
    }
  })
}
if (window.google) {
  console.log('google 登录sdk加载完成')
} else {
  script.src = 'https://accounts.google.com/gsi/client' // 加载客户端库
  script.async = true
  script.onload = () => {
    console.log('google 登录sdk加载完成')
  }
  document.head.appendChild(script)
}
/**
 * 隐式流程
 */
function ImplicitGrant() {
  const client = google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
    callback: (response) => {
      console.log('qwe ImplicitGrant', response)
    },
  })
  client.requestAccessToken()

  // const client = google.accounts.oauth2.initCodeClient({
  //   client_id: clientId,
  //   scope: 'https://www.googleapis.com/auth/calendar.readonly',
  //   ux_mode: 'redirect',
  //   redirect_uri: 'http://localhost:5174',
  //   state: 'YOUR_BINDING_VALUE',
  // })

  // const client = google.accounts.oauth2.initCodeClient({
  //   client_id: clientId,
  //   scope: 'https://www.googleapis.com/auth/calendar.readonly',
  //   ux_mode: 'popup',
  //   callback: (response) => {
  //     const xhr = new XMLHttpRequest()
  //     xhr.open('POST', 'http://localhost:5174', true)
  //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  //     // Set custom header for CRSF
  //     xhr.setRequestHeader('X-Requested-With', 'XmlHttpRequest')
  //     xhr.onload = function () {
  //       console.log('Auth code response: ' + xhr.responseText)
  //     }
  //     xhr.send('code=' + response.code)
  //   },
  // })
  // client.requestCode()
}
window.ImplicitGrant = ImplicitGrant
/**
 * 跳转到授权页面,触发手动登录
 */
function manualLogin() {
  // "email profile https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/drive.metadata.readonly openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
  if (location.href.includes('localhost')) {
    redirectUri = 'http://localhost:5174'
  }
  const ahref = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=code&state=abc&redirect_uri=${redirectUri}&client_id=${clientId}&prompt=consent`
  // const ahref = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=code&state=abc&redirect_uri=${redirectUri}&client_id=${clientId}&prompt=consent`
  const aEle = document.createElement('a')
  aEle.href = ahref
  aEle.target = '_blank'
  aEle.click()
}
// 授权后的重定向逻辑处理,通过code和客户端秘钥获取用户信息
function handleRedirectPageLogin() {
  const _p = new URLSearchParams(location.search)
  const code = _p.get('code')
  // const state = _p.get('state')
  if (!code) return
  if (location.href.includes('localhost')) {
    redirectUri = 'http://localhost:5174'
  }
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow',
  }

  fetch(
    `https://oauth2.googleapis.com/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirectUri}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      // {
      //   access_token: 'ya29.a0ARW5m74OSxwFh4GaQxS'
      //   expires_in: 3599
      //   scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
      //   token_type: 'Bearer'
      // }
      // {
      //   access_token: 'ya29.a0ARW5m75ucl'
      //   expires_in: 3599
      //   id_token: 'a.b.c'
      //   scope: 'openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.email'
      //   token_type: 'Bearer'
      // }

      console.log('qwe result', result)
      const userinfo = JSON.parse(
        decodeURIComponent(escape(window.atob(result.id_token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')))),
      )
      console.log(result)
      showToast({ message: '登录成功 ' + JSON.stringify(userinfo, null, 2), duration: 4000 })
    })
    .catch((error) => console.error(error))
}

handleRedirectPageLogin()
window.manualLogin = manualLogin
