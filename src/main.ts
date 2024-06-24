import { createApp } from 'vue'
import 'vant/lib/index.css'
import './styles/index.scss'
import App from './App.vue'
const app = createApp(App)

app.mount('#app')

console.log('qwe', import.meta.env)
