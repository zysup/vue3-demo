import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import NProgress from '@/utils/progress'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((_to, _from, next) => {
  NProgress.start()
  // 路由缓存
  // useCachedViewStoreHook().addCachedView(to);
  // 页面 title
  // setPageTitle(to.meta.title);
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
