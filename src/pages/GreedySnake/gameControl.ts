import Snake from './snake'
import Food from './food'
import ScorePanel from './scorePanel'

class GameControl {
  // 定义三个属性：蛇、食物、记分板
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  // 存储方向
  direction = 'ArrowRight'

  // 蛇是否活着
  isLive = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }
  // 初始化事件
  init() {
    this.isLive && document.addEventListener('keydown', this.keydownhandler.bind(this))

    this.run()
  }

  /**
   *
   * @param evt
   * ArrowRight
      ArrowDown
      ArrowLeft
      ArrowUp
   */
  keydownhandler(evt: KeyboardEvent) {
    // console.log(evt.key);
    const x = ['ArrowRight', 'ArrowLeft'].includes(this.direction)
    const x1 = ['ArrowRight', 'ArrowLeft'].includes(evt.key)
    const y = ['ArrowDown', 'ArrowUp'].includes(this.direction)
    const y1 = ['ArrowDown', 'ArrowUp'].includes(evt.key)
    if ((x && y1) || (y && x1)) {
      this.direction = evt.key
    }
  }
  /**
   * 蛇跑起来
   */
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowRight':
        X += 10
        break
      case 'ArrowDown':
        Y += 10
        break
      case 'ArrowLeft':
        X -= 10
        break
      case 'ArrowUp':
        Y -= 10
        break
      default:
        break
    }
    this.checkEat(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (error) {
      alert((error as Error).message + 'GAME OVER')
      this.isLive = false
      return
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  checkEat(X: number, Y: number) {
    if (X == this.food.x && Y == this.food.y) {
      this.food.change()
      this.scorePanel.addScore()
      this.snake.addBody()
    }
  }
}

export default GameControl
