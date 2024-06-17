// https://zh-hans.eslint.org/docs/latest/use/getting-started
// https://tsingwong.github.io/learn-eslint-plugin-vue/

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

// console.log('qwe', ...tseslint.configs.recommended)

export default [
  // { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      // 'no-unused-vars': 'warn',
      // 'no-undef': 'warn',
    },
  },
]
