// https://www.w3cschool.cn/tailwind_css/tailwind_css-tl3r3pau.html

const colors = import('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  variants: {
    backgroundColor: ['focus', 'hover'],
    borderColor: ['focus', 'hover'],
  },
  theme: {
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
  },
  plugins: [],
}
