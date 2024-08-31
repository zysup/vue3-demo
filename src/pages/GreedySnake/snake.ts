// 蛇

class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = this.element.getElementsByTagName('div')
  }

  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }

  set X(value: number) {
    if (this.X == value) {
      return
    }
    // console.log('qwe x', value)

    if (value < 0 || value > 292) {
      throw new Error('蛇撞墙了！')
    }

    // 禁止水平掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }

    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set Y(value: number) {
    if (this.Y == value) {
      return
    }
    // console.log('qwe y', value)
    if (value < 0 || value > 292) {
      throw new Error('蛇撞墙了！')
    }
    // 禁止垂直掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }
  // 增加身体
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
  // 身体移动
  moveBody() {
    for (let index = this.bodies.length - 1; index > 0; index--) {
      const X = (this.bodies[index - 1] as HTMLElement).offsetLeft
      const Y = (this.bodies[index - 1] as HTMLElement).offsetTop
      ;(this.bodies[index] as HTMLElement).style.left = X + 'px'
      ;(this.bodies[index] as HTMLElement).style.top = Y + 'px'
    }
  }
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      const bd = this.bodies[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('撞到自己了！')
      }
    }
  }
}

export default Snake
