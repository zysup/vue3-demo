// https://www.w3cschool.cn/tailwind_css/tailwind_css-tl3r3pau.html

const colors = import('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  // fontSize: {
  //   root: '0.875rem', // 14px
  // },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // 内边距
    padding: Array.from({ length: 20 }).reduce((map, _, index) => {
      map[index * 2] = `${index * 2}px`
      return map
    }, {}),
    // 外边距
    spacing: Array.from({ length: 20 }).reduce((map, _, index) => {
      map[index * 2] = `${index * 2}px`
      return map
    }, {}),
    // 圆角
    borderRadius: Array.from({ length: 20 }).reduce((map, _, index) => {
      map[index * 2] = `${index * 2}px`
      return map
    }, {}),
    // 字体大小
    fontSize: Array.from({ length: 15 }).reduce((map, _, index) => {
      if (index < 5) return map
      map[index * 2] = `${index * 2}px`
      return map
    }, {}),
    // 行高
    lineHeight: Array.from({ length: 30 }).reduce((map, _, index) => {
      if (index < 5) return map
      map[index * 2] = `${index * 2}px`
      map['1.3'] = 1.3
      map['1.4'] = 1.4
      map['1.5'] = 1.5
      return map
    }, {}),

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      gray: colors.gray,
    },
    extend: {
      // 宽度
      width: Array.from({ length: 375 }).reduce((map, _, index) => {
        map[index] = `${index}px`
        return map
      }, {}),
      // 高度
      height: Array.from({ length: 375 }).reduce((map, _, index) => {
        map[index] = `${index}px`
        return map
      }, {}),
    },
  },
  plugins: [],
}
