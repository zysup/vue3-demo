// import Layout from '@/layout/index.vue'
import About from '@/pages/About.vue'
import Home from '@/pages/Home.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      showFooter: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于',
      showFooter: true,
    },
  },
  {
    path: '/my-center',
    name: 'MyCenter',
    component: () => import('@/pages/MyCenter/index.vue'),
    meta: {
      title: '个人中心',
    },
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('@/pages/PrivacyPolicy/index.vue'),
    meta: {
      title: '隐私政策',
    },
  },
]

export default routes
