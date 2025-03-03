import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { visualizer } from 'rollup-plugin-visualizer'

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
          IconsResolver({
            prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
            // alias: { park: 'icon-park' } 集合的别名
            // enabledCollections: ['ep'], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
            enabledCollections: ['ep', 'mdi', 'line-md', 'svg-spinners', 'meteocons', 'cif'], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
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
      VueSetupExtend(),
      Icons({
        // scale: 1, // 缩放
        // compiler: 'vue3', // 编译方式
        // defaultClass: '', // 默认类名
        // defaultStyle: '', // 默认样式
        autoInstall: true,
        // jsx: 'react' // jsx支持
      }),
      visualizer({
        filename: './dist/stats.html',
        title: 'Bundle Visualizer',
        gzipSize: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    build: {
      rollupOptions: {
        output: {
          // 入口文件名称
          entryFileNames: 'assets/js/[name]-[hash].js',
          // 代码分块文件名称
          chunkFileNames: 'assets/js/[name]-[hash].js',
          // 资源文件名称
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]'
            }
            if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
              return 'assets/images/[name]-[hash][extname]'
            }
            return 'assets/others/[name]-[hash][extname]'
          },

          // 手动分块配置
          manualChunks(id) {
            // 将 node_modules 中的代码单独打包
            if (id.includes('node_modules')) {
              return 'vendor'
            }
            if (id.includes('/index.')) {
              return id.split('/').at(-2)
            }
          },
        },
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
