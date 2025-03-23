/**
 * @file 项目入口ts文件
 * @author Router
 */
console.log('product.ts 开始执行')
import { createApp } from 'vue'

import 'vant/lib/index.css'
import './styles/index.scss'

import App from './pages/Product/index.vue'
const app = createApp(App)

app.mount('#app')
