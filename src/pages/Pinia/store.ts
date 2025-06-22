export const state = reactive({
  age: 18,
  name: '张三',
})
// export const state = {
//   age: 18,
//   name: '张三',
// }
export const getters123 = {
  getAge: () => state.age * 2,
  getName: () => state.name,
}
export const actions = {
  setAge(newAge: number) {
    state.age = newAge
  },
  setName(newName: string) {
    state.name = newName
  },
  reset() {
    state.age = 18
    state.name = '张三'
  },
  incrementAge() {
    state.age += 1
  },
  decrementAge() {
    if (state.age > 0) {
      state.age -= 1
    }
  },
  updateName(newName: string) {
    if (newName && typeof newName === 'string') {
      state.name = newName
    } else {
      console.error('Invalid name')
    }
  },
}
