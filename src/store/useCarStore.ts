import { defineStore } from 'pinia'

// 车辆 Store 示例
type Car = {
  id: string
  brand: string
  model: string
  price: number
}

export const useCarStore = defineStore('car', {
  state: () => ({
    cars: [] as Car[],
    selectedCarId: '' as string,
  }),
  getters: {
    carCount(state) {
      return state.cars.length
    },
    selectedCar(state) {
      return state.cars.find((car) => car.id === state.selectedCarId) || null
    },
  },
  actions: {
    addCar(car: Car) {
      this.cars.push(car)
    },
    removeCar(id: string) {
      this.cars = this.cars.filter((car) => car.id !== id)
      if (this.selectedCarId === id) {
        this.selectedCarId = ''
      }
    },
    selectCar(id: string) {
      this.selectedCarId = id
    },
    clearCars() {
      this.cars = []
      this.selectedCarId = ''
    },
  },
})
