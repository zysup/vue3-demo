import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    name: 'zhansan',
    age: 18,
    token: '',
    isLogin: false,
  }),
  getters: {
    userInfo(state) {
      return `${state.name} (${state.age})`
    },
    isAdult(state) {
      return state.age >= 18
    },
  },
  actions: {
    login(name: string, age: number, token: string) {
      this.name = name
      this.age = age
      this.token = token
      this.isLogin = true
    },
    logout() {
      this.name = ''
      this.age = 0
      this.token = ''
      this.isLogin = false
    },
    setId(id: string) {
      this.id = id
    },
  },
})
