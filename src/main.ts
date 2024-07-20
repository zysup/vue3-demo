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

document.documentElement.style.setProperty('--100vh', window.innerHeight + 'px')
window.addEventListener('resize', () =>
  document.documentElement.style.setProperty('--100vh', window.innerHeight + 'px'),
)
