// 食物

export default class Food {
  element: HTMLElement
  constructor() {
    // food元素
    this.element = document.getElementById('food')!
  }
  // 获取食物的坐标方法
  get x() {
    return this.element.offsetLeft
  }
  get y() {
    return this.element.offsetTop
  }

  // 改变食物位置
  change() {
    const top = Math.round(Math.random() * 29) * 10
    const left = Math.round(Math.random() * 29) * 10
    this.element.style.left = top + 'px'
    this.element.style.top = left + 'px'
  }
}
