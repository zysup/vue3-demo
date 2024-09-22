import { createRouter, createWebHashHistory, type RouteLocationNormalized } from 'vue-router'
import routes from './routes'
import NProgress from '@/utils/progress'
import setPageTitle from '@/utils/set-page-title'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string
  }
}

router.beforeEach((to: toRouteType, _, next) => {
  NProgress.start()
  // 路由缓存
  // useCachedViewStoreHook().addCachedView(to);
  // 页面 title
  setPageTitle(to.meta.title)
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
