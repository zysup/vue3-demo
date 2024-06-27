import Layout from '@/layout/index.vue'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: 'about',
        name: 'About',
        component: About,
        meta: {
          title: '关于',
        },
      },
      {
        path: 'my-center',
        name: 'MyCenter',
        component: () => import('@/views/MyCenter.vue'),
        meta: {
          title: '个人中心',
        },
      },
    ],
  },
]

export default routes
