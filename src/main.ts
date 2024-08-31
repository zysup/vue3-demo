/**
 * @file 项目入口ts文件
 * @author Router
 */

import { createApp } from 'vue'
import router from '@/router'
import 'vant/lib/index.css'
import './styles/index.scss'
import './1.ts'
import App from './App.vue'
const app = createApp(App)

app.use(router)
app.mount('#app')

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

const e = console.error
console.error = function (...args) {
  return e('Error=>' + args[0], ...args.slice(1))
}
