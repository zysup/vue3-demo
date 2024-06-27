import { createApp } from 'vue'
import router from '@/router'
import 'vant/lib/index.css'
import './styles/index.scss'
import App from './App.vue'
const app = createApp(App)

app.use(router)
app.mount('#app')

console.log('qwe', import.meta.env)
