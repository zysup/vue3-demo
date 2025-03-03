// vite.config.ts
import path from "path";
import { defineConfig, loadEnv } from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.8_sass@1.77.6_terser@5.31.1/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.1_@types+node@20.14.8_sass@1.77.6_terser@5.31.1__vue@3.4.30_typescript@5.5.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.7_rollup@4.18.0_vue@3.4.30_typescript@5.5.2_/node_modules/unplugin-vue-components/dist/vite.js";
import { VantResolver } from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.7_rollup@4.18.0_vue@3.4.30_typescript@5.5.2_/node_modules/unplugin-vue-components/dist/resolvers.js";
import Icons from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/unplugin-icons@22.0.0_@vue+compiler-sfc@3.4.30_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/unplugin-icons@22.0.0_@vue+compiler-sfc@3.4.30_vue-template-compiler@2.7.16/node_modules/unplugin-icons/dist/resolver.js";
import AutoImport from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/unplugin-auto-import@0.17.6_rollup@4.18.0/node_modules/unplugin-auto-import/dist/vite.js";
import { createHtmlPlugin } from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.3.1_@types+node@20.14.8_sass@1.77.6_terser@5.31.1_/node_modules/vite-plugin-html/dist/index.mjs";
import VueSetupExtend from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/vite-plugin-vue-setup-extend@0.4.0_vite@5.3.1_@types+node@20.14.8_sass@1.77.6_terser@5.31.1_/node_modules/vite-plugin-vue-setup-extend/dist/index.mjs";
import { visualizer } from "file:///Users/zy/Desktop/study/vue3-demo/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.18.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: "./",
    plugins: [
      vue(),
      AutoImport({
        dts: "types/auto-imports.d.ts",
        imports: ["vue", "vue-router"],
        // https://github.com/unplugin/unplugin-auto-import?tab=readme-ov-file#eslint
        eslintrc: {
          enabled: true
        }
      }),
      Components({
        dts: "types/components.d.ts",
        resolvers: [
          VantResolver({
            importStyle: false
          }),
          IconsResolver({
            prefix: "icon",
            // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
            // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
            // alias: { park: 'icon-park' } 集合的别名
            // enabledCollections: ['ep'], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
            enabledCollections: ["ep", "mdi", "line-md", "svg-spinners", "meteocons", "cif"]
            // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
          })
        ]
      }),
      // 注入模板数据
      createHtmlPlugin({
        inject: {
          data: {
            ENABLE_ERUDA: env.VITE_ENABLE_ERUDA
          }
        }
      }),
      VueSetupExtend(),
      Icons({
        // scale: 1, // 缩放
        // compiler: 'vue3', // 编译方式
        // defaultClass: '', // 默认类名
        // defaultStyle: '', // 默认样式
        autoInstall: true
        // jsx: 'react' // jsx支持
      }),
      visualizer({
        filename: "./dist/stats.html",
        title: "Bundle Visualizer",
        gzipSize: true
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src")
        // 相对路径别名配置，使用 @ 代替 src
      }
    },
    build: {
      rollupOptions: {
        output: {
          // 入口文件名称
          entryFileNames: "assets/js/[name]-[hash].js",
          // 代码分块文件名称
          chunkFileNames: "assets/js/[name]-[hash].js",
          // 资源文件名称
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".css")) {
              return "assets/css/[name]-[hash][extname]";
            }
            if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
              return "assets/images/[name]-[hash][extname]";
            }
            return "assets/others/[name]-[hash][extname]";
          },
          // 手动分块配置
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
            if (id.includes("/index.")) {
              return id.split("/").at(-2);
            }
          }
        }
      }
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
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvenkvRGVza3RvcC9zdHVkeS92dWUzLWRlbW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy96eS9EZXNrdG9wL3N0dWR5L3Z1ZTMtZGVtby92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvenkvRGVza3RvcC9zdHVkeS92dWUzLWRlbW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnXG5pbXBvcnQgVnVlU2V0dXBFeHRlbmQgZnJvbSAndml0ZS1wbHVnaW4tdnVlLXNldHVwLWV4dGVuZCdcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIC8vIFx1NzNBRlx1NTg4M1x1NTNEOFx1OTFDRlxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKVxuICByZXR1cm4ge1xuICAgIGJhc2U6ICcuLycsXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgZHRzOiAndHlwZXMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bnBsdWdpbi91bnBsdWdpbi1hdXRvLWltcG9ydD90YWI9cmVhZG1lLW92LWZpbGUjZXNsaW50XG4gICAgICAgIGVzbGludHJjOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIGR0czogJ3R5cGVzL2NvbXBvbmVudHMuZC50cycsXG4gICAgICAgIHJlc29sdmVyczogW1xuICAgICAgICAgIFZhbnRSZXNvbHZlcih7XG4gICAgICAgICAgICBpbXBvcnRTdHlsZTogZmFsc2UsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgICBwcmVmaXg6ICdpY29uJywgLy8gXHU4MUVBXHU1MkE4XHU1RjE1XHU1MTY1XHU3Njg0SWNvblx1N0VDNFx1NEVGNlx1N0VERlx1NEUwMFx1NTI0RFx1N0YwMFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBpXHVGRjBDXHU4QkJFXHU3RjZFZmFsc2VcdTRFM0FcdTRFMERcdTk3MDBcdTg5ODFcdTUyNERcdTdGMDBcbiAgICAgICAgICAgIC8vIHtwcmVmaXh9LXtjb2xsZWN0aW9ufS17aWNvbn0gXHU0RjdGXHU3NTI4XHU3RUM0XHU0RUY2XHU4OUUzXHU2NzkwXHU1NjY4XHU2NUY2XHVGRjBDXHU2MEE4XHU1RkM1XHU5ODdCXHU5MDc1XHU1RkFBXHU1NDBEXHU3OUYwXHU4RjZDXHU2MzYyXHU2MjREXHU4MEZEXHU2QjYzXHU3ODZFXHU2M0E4XHU2NUFEXHU1NkZFXHU2ODA3XHUzMDAyXG4gICAgICAgICAgICAvLyBhbGlhczogeyBwYXJrOiAnaWNvbi1wYXJrJyB9IFx1OTZDNlx1NTQwOFx1NzY4NFx1NTIyQlx1NTQwRFxuICAgICAgICAgICAgLy8gZW5hYmxlZENvbGxlY3Rpb25zOiBbJ2VwJ10sIC8vIFx1OEZEOVx1NjYyRlx1NTNFRlx1OTAwOVx1NzY4NFx1RkYwQ1x1OUVEOFx1OEJBNFx1NTQyRlx1NzUyOCBJY29uaWZ5IFx1NjUyRlx1NjMwMVx1NzY4NFx1NjI0MFx1NjcwOVx1OTZDNlx1NTQwOFsnbWRpJ11cbiAgICAgICAgICAgIGVuYWJsZWRDb2xsZWN0aW9uczogWydlcCcsICdtZGknLCAnbGluZS1tZCcsICdzdmctc3Bpbm5lcnMnLCAnbWV0ZW9jb25zJywgJ2NpZiddLCAvLyBcdThGRDlcdTY2MkZcdTUzRUZcdTkwMDlcdTc2ODRcdUZGMENcdTlFRDhcdThCQTRcdTU0MkZcdTc1MjggSWNvbmlmeSBcdTY1MkZcdTYzMDFcdTc2ODRcdTYyNDBcdTY3MDlcdTk2QzZcdTU0MDhbJ21kaSddXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIC8vIFx1NkNFOFx1NTE2NVx1NkEyMVx1Njc3Rlx1NjU3MFx1NjM2RVxuICAgICAgY3JlYXRlSHRtbFBsdWdpbih7XG4gICAgICAgIGluamVjdDoge1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIEVOQUJMRV9FUlVEQTogZW52LlZJVEVfRU5BQkxFX0VSVURBLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIFZ1ZVNldHVwRXh0ZW5kKCksXG4gICAgICBJY29ucyh7XG4gICAgICAgIC8vIHNjYWxlOiAxLCAvLyBcdTdGMjlcdTY1M0VcbiAgICAgICAgLy8gY29tcGlsZXI6ICd2dWUzJywgLy8gXHU3RjE2XHU4QkQxXHU2NUI5XHU1RjBGXG4gICAgICAgIC8vIGRlZmF1bHRDbGFzczogJycsIC8vIFx1OUVEOFx1OEJBNFx1N0M3Qlx1NTQwRFxuICAgICAgICAvLyBkZWZhdWx0U3R5bGU6ICcnLCAvLyBcdTlFRDhcdThCQTRcdTY4MzdcdTVGMEZcbiAgICAgICAgYXV0b0luc3RhbGw6IHRydWUsXG4gICAgICAgIC8vIGpzeDogJ3JlYWN0JyAvLyBqc3hcdTY1MkZcdTYzMDFcbiAgICAgIH0pLFxuICAgICAgdmlzdWFsaXplcih7XG4gICAgICAgIGZpbGVuYW1lOiAnLi9kaXN0L3N0YXRzLmh0bWwnLFxuICAgICAgICB0aXRsZTogJ0J1bmRsZSBWaXN1YWxpemVyJyxcbiAgICAgICAgZ3ppcFNpemU6IHRydWUsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKCcuL3NyYycpLCAvLyBcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcdUZGMENcdTRGN0ZcdTc1MjggQCBcdTRFRTNcdTY2RkYgc3JjXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgLy8gXHU1MTY1XHU1M0UzXHU2NTg3XHU0RUY2XHU1NDBEXHU3OUYwXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgLy8gXHU0RUUzXHU3ODAxXHU1MjA2XHU1NzU3XHU2NTg3XHU0RUY2XHU1NDBEXHU3OUYwXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgLy8gXHU4RDQ0XHU2RTkwXHU2NTg3XHU0RUY2XHU1NDBEXHU3OUYwXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSAmJiBhc3NldEluZm8ubmFtZS5lbmRzV2l0aCgnLmNzcycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2Nzcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lICYmIC9cXC4ocG5nfGpwZT9nfGdpZnxzdmd8d2VicCkkLy50ZXN0KGFzc2V0SW5mby5uYW1lKSkge1xuICAgICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9pbWFnZXMvW25hbWVdLVtoYXNoXVtleHRuYW1lXSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL290aGVycy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdJ1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICAvLyBcdTYyNEJcdTUyQThcdTUyMDZcdTU3NTdcdTkxNERcdTdGNkVcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgIC8vIFx1NUMwNiBub2RlX21vZHVsZXMgXHU0RTJEXHU3Njg0XHU0RUUzXHU3ODAxXHU1MzU1XHU3MkVDXHU2MjUzXHU1MzA1XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XG4gICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCcvaW5kZXguJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlkLnNwbGl0KCcvJykuYXQoLTIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHBvcnQ6IDUxNzQsXG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9jbi52aXRlanMuZGV2L2NvbmZpZy8jc2VydmVyLXByb3h5XG4gICAgICAgIC8vICcvZGV2LWFwaSc6IHtcbiAgICAgICAgLy8gdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgICAgLy8gdGFyZ2V0OiAnaHR0cHM6Ly92dWUucnVveWkudmlwJyxcbiAgICAgICAgLy8gY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAvLyByZXdyaXRlOiAocCkgPT4gcC5yZXBsYWNlKC9eXFwvZGV2LWFwaS8sICcvcHJvZC1hcGknKSxcbiAgICAgICAgLy8gfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVIsT0FBTyxVQUFVO0FBQ3RTLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyx3QkFBd0I7QUFDakMsT0FBTyxvQkFBb0I7QUFDM0IsU0FBUyxrQkFBa0I7QUFHM0IsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFFeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBQzNDLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLElBQUk7QUFBQSxNQUNKLFdBQVc7QUFBQSxRQUNULEtBQUs7QUFBQSxRQUNMLFNBQVMsQ0FBQyxPQUFPLFlBQVk7QUFBQTtBQUFBLFFBRTdCLFVBQVU7QUFBQSxVQUNSLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxLQUFLO0FBQUEsUUFDTCxXQUFXO0FBQUEsVUFDVCxhQUFhO0FBQUEsWUFDWCxhQUFhO0FBQUEsVUFDZixDQUFDO0FBQUEsVUFDRCxjQUFjO0FBQUEsWUFDWixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUlSLG9CQUFvQixDQUFDLE1BQU0sT0FBTyxXQUFXLGdCQUFnQixhQUFhLEtBQUs7QUFBQTtBQUFBLFVBQ2pGLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRixDQUFDO0FBQUE7QUFBQSxNQUVELGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0osY0FBYyxJQUFJO0FBQUEsVUFDcEI7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxlQUFlO0FBQUEsTUFDZixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtKLGFBQWE7QUFBQTtBQUFBLE1BRWYsQ0FBQztBQUFBLE1BQ0QsV0FBVztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1osQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLE9BQU87QUFBQTtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBO0FBQUEsVUFFTixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixnQkFBSSxVQUFVLFFBQVEsVUFBVSxLQUFLLFNBQVMsTUFBTSxHQUFHO0FBQ3JELHFCQUFPO0FBQUEsWUFDVDtBQUNBLGdCQUFJLFVBQVUsUUFBUSw4QkFBOEIsS0FBSyxVQUFVLElBQUksR0FBRztBQUN4RSxxQkFBTztBQUFBLFlBQ1Q7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFBQTtBQUFBLFVBR0EsYUFBYSxJQUFJO0FBRWYsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTztBQUFBLFlBQ1Q7QUFDQSxnQkFBSSxHQUFHLFNBQVMsU0FBUyxHQUFHO0FBQzFCLHFCQUFPLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQUEsWUFDNUI7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVFQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
