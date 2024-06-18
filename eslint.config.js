// https://zh-hans.eslint.org/docs/latest/use/getting-started
// https://tsingwong.github.io/learn-eslint-plugin-vue/

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
  // { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    ignores: ['public', 'dist', 'node_modules'],
    rules: {
      // eslint（https://eslint.org/docs/latest/rules/）
      'no-useless-escape': 'off', // 禁止不必要的转义字符

      // typeScript (https://typescript-eslint.io/rules)
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。

      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
    },
  },
]
