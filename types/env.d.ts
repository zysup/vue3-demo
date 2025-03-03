interface Window {
  bbb?: string
  fbAsyncInit: Function
  FB: {
    init: Function
    AppEvents: {
      logPageView: Function
    }
  }
  Fingerprint2: Function
  eruda: any
}

declare const Fingerprint2: any
declare const my: any

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

declare module 'webpack-bundle-analyzer' {
  const BundleAnalyzerPlugin: any
  export { BundleAnalyzerPlugin }
}
