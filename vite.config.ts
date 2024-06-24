import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 环境变量
  const env = loadEnv(mode, process.cwd(), '')
  return {
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
    ],
  }
})
