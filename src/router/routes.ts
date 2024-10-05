// import Layout from '@/layout/index.vue'
import About from '@/pages/About/index.vue'
import Home from '@/pages/Home/index.vue'
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
    path: '/mycenter',
    name: 'MyCenter',
    component: () => import('@/pages/MyCenter/index.vue'),
    meta: {
      title: '个人中心',
    },
  },
  {
    path: '/privacypolicy',
    name: 'PrivacyPolicy',
    component: () => import('@/pages/PrivacyPolicy/index.vue'),
    meta: {
      title: '隐私政策',
    },
  },
  {
    path: '/vue3feature',
    name: 'Vue3Feature',
    component: () => import('@/pages/Vue3Feature/index.vue'),
    meta: {
      title: 'Vue3特性',
    },
  },
  {
    path: '/vantfeature',
    name: 'VantFeature',
    component: () => import('@/pages/VantFeature/index.vue'),
    meta: {
      title: 'Vant特性',
    },
  },
  {
    path: '/greedysnake',
    name: 'GreedySnake',
    component: () => import('@/pages/GreedySnake/index.vue'),
  },
  {
    path: '/greedysnake',
    name: 'GreedySnake',
    component: () => import('@/pages/GreedySnake/index.vue'),
  },
  {
    path: '/luckydraw',
    name: 'LuckDraw',
    component: () => import('@/pages/LuckyDraw/index.vue'),
  },
  {
    path: '/authorizedlogin',
    name: 'Authorizedlogin',
    component: () => import('@/pages/Authorizedlogin/index.vue'),
  },
]

export default routes
