// 记分板

export default class ScorePanel {
  score = 0
  level = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement
  // 限制等级
  maxLevel: number
  // 多少分升级
  upScore: number
  constructor(maxLevel = 10, upScore = 2) {
    this.maxLevel = maxLevel
    this.upScore = upScore
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
  }
  // 设置一个加分方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + ''

    if (this.score % this.upScore == 0) {
      this.levelUp()
    }
  }
  // 提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}
