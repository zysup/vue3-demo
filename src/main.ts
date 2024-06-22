import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import { Button } from 'vant'
const app = createApp(App)

app.use(Button)
app.mount('#app')
