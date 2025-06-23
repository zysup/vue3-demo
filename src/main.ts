/**
 * @file 项目入口ts文件
 * @author Router
 */
console.log('main.ts 开始执行')
import { createApp } from 'vue'
import router from '@/router'
import 'vant/lib/index.css'
import './styles/index.scss'
import './codetest/index.ts'
import { createPinia } from 'pinia'
import App from './App.vue'
const app = createApp(App)

app.use(router)

document.addEventListener(
  'touchstart',
  function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  },
  { passive: false },
)
document.addEventListener(
  'dblclick',
  function mydblclick(event) {
    event.preventDefault()
  },
  { passive: false },
)

const match = window.matchMedia('(orientation: landscape)')
match.onchange = function (mal) {
  document.body.classList.toggle('landscape', mal.matches)
}

document.documentElement.style.setProperty('--100vh', window.innerHeight + 'px')
window.addEventListener('resize', () =>
  document.documentElement.style.setProperty('--100vh', window.innerHeight + 'px'),
)

const mode = getComputedStyle(document.documentElement).getPropertyValue('--theme').trim()
document.body.classList.add(mode)

const originalConsoleError = console.error
console.error = function (...args) {
  return originalConsoleError('Error=> ' + args[0], ...args.slice(1))
}

// 为安装此插件后创建的每个store添加一个名为 `secret` 的属性
// 这可能在不同的文件中
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}
const pinia = createPinia()
// 将插件提供给 pinia
pinia.use(SecretPiniaPlugin)
pinia.use(() => ({ hello: 'world' }))
app.use(pinia)

app.mount('#app')
