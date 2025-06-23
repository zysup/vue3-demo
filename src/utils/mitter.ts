import mitt, { Emitter } from 'mitt'

export type Events = {
  'custom-event': string // 假设事件传递的是 string
}

// 全局唯一 emitter 实例
const emitter: Emitter<Events> = mitt<Events>()

export default emitter
