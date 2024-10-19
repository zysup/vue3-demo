import { loadScript } from './index'

loadScript('//cdn.jsdelivr.net/npm/eruda', 5000, () => {
  window.eruda.init()
})
