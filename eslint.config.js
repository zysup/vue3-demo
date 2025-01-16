// https://zh-hans.eslint.org/docs/latest/use/getting-started
// https://tsingwong.github.io/learn-eslint-plugin-vue/
// https://eslint.nodejs.cn/

// import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { readFile } from 'node:fs/promises'

const autoImportFile = new URL('./.eslintrc-auto-import.json', import.meta.url)
const autoImportGlobals = JSON.parse(await readFile(autoImportFile, 'utf8'))

export default [
  // { languageOptions: { globals: globals.browser } },
  { languageOptions: { globals: { ...autoImportGlobals.globals } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    ignores: ['public/', 'dist/', '**/.*'],
    ecmaVersion: 2020, // 你可以设置为你需要的 ECMAScript 版本
    sourceType: 'module', // 这个选项允许你使用 import/export 语法
  },
  {
    files: ['{src,types}/**/*.{vue,js,jsx,ts,tsx}'],
    rules: {
      // eslint（https://eslint.org/docs/latest/rules/）
      'no-useless-escape': 'off', // 禁止不必要的转义字符
      // semi: 'error',

      // typeScript (https://typescript-eslint.io/rules)
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。

      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    },
  },
  {
    env: {
      node: true, // 启用 Node.js 环境
    },
  },
]
