import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { createHtmlPlugin } from 'vite-plugin-html'
import { visualizer } from 'rollup-plugin-visualizer'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 环境变量
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: './',
    plugins: [
      vue(),
      AutoImport({
        dts: 'types/auto-imports.d.ts',
        imports: ['vue', 'vue-router'],
        // https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file#eslint
        eslintrc: {
          enabled: true,
        },
      }),
      Components({
        dts: 'types/components.d.ts',
        resolvers: [
          VantResolver({
            importStyle: false,
          }),
        ],
      }),
      // 注入模板数据
      createHtmlPlugin({
        inject: {
          data: {
            ENABLE_ERUDA: env.VITE_ENABLE_ERUDA,
          },
        },
      }),
      visualizer({
        filename: './dist/stats.html',
        title: 'Bundle Visualizer',
      }),
      VueSetupExtend(),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    server: {
      port: 5174,
      host: true,
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        // '/dev-api': {
        // target: 'http://localhost:8080',
        // target: 'https://vue.ruoyi.vip',
        // changeOrigin: true,
        // rewrite: (p) => p.replace(/^\/dev-api/, '/prod-api'),
        // },
      },
    },
  }
})
