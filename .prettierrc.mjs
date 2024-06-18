/**
 * 修改配置后重启编辑器
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true, // 使用单引号代替双引号
  semi: false, // 每行末尾自动添加分号
  printWidth: 120, // 换行长度，默认80
  plugins: ['prettier-plugin-tailwindcss'],
}
export default config
