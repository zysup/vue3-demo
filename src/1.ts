/* @vite-ignore */
// console.log('qwe', new URL('data.txt', import.meta.url))
// console.log(qwe)
//@ts-nocheck
type Aaa = {
  bbb: number
  ccc?: number
}
const aaa: Aaa = {
  bbb: 1,
}
console.log('qwe this', this)
aaa.ccc ??= 123
// aaa.bbb = aaa?.ccc?.ddd ?? '456'
console.log('qweqwe', aaa)

// import arrayMap from 'array-map-abc's

// console.log(
//   'qwe',
//   arrayMap([1, 2], (item,index) => {}),
// )

import axios from 'axios'

console.log('qwe', axios.Axios)

// const wt={bbb:1};wt.bbb&&(wt.bbb=123);
// var ci;
// wt.bbb=((ci=wt==null?void 0:wt.ccc)==null?void 0:ci.ddd)??"456";
// console.log("qweqwe",wt);
// const aabc = arrayMap([1, 2], (item, _) => {
//   return item * 2
// })
// console.log('qwe aabc', aabc)

// if (parent) {
//   console.log('parent', parent)
//   setTimeout(() => {
//     parent.location.href = 'http://www.google.com'
//   }, 5000)
// }

var bc = new BroadcastChannel('zhangxinxu')
bc.onmessage = function (event) {
  console.log(event.data)
  // 输出'欢迎支持正版书籍'
}
;(async () => {
  const { default: sdk } = await import('../public/initSdk.ts')
  console.log('qwe sdk', sdk)
})()

enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}

let c: string = Color[1]
let d: Color = Color.Blue
// console.log('qwe c', c)
// declare function create(o: object | null): Object

// create({ prop: 0 })
// create(undefined8)

// interface SquareConfig {
//   color?: string
//   width?: number
// }

// let a: number[] = [1, 2, 3, 4]
// let ro: ReadonlyArray<number> = a

class Animal {
  name: string
  constructor() {
    this.name = 'Animal'
  }
}
class Dog extends Animal {
  breed: string
  constructor(name: string, breed: string) {
    super()
    this.name = name
    this.breed = breed
  }
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: string]: Animal
  [x: number]: Dog
}
interface NotOkay2 {
  [x: string]: string | number
  [x: number]: string
}

let myArray: NotOkay2 = ['Alice', 'Bob']
myArray[10] = '123'

import './2.ts'

interface Bird {
  fly(x: any): void
  layEggs: (x: any) => void
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish & Bird {
  return {
    swim() {
      console.log('swim')
    },
    layEggs() {
      console.log('layEggs')
    },
    fly() {
      console.log('fly')
    },
  }
}

// let pet = getSmallPet()
// pet.layEggs() // okay
// // pet.swim();    // errors

// function isFish(pet: Fish | Bird): pet is Fish {
//   return (<Fish>pet).swim !== undefined
// }

let pet = getSmallPet()

if ((<Fish>pet).swim) {
  ;(<Fish>pet).swim()
} else {
  ;(<Bird>pet).fly()
}
let s = 'foo'
s = null // 错误, 'null'不能赋值给'string'
let sn: string | null = 'bar'
sn = null // 可以

sn = undefined // error, 'undefined'不能赋值给'string | null'

// const a: Readonly<T>  = {
//   name: '123',
//   age: 123,
//   // address: '456',
// }
type bbb = {
  name: string
  age: number
  address?: string
}
type aaa = Readonly<bbb>
const a: aaa = {
  name: '123',
  age: 123,
  // address: '456',
}
a.name = '456' // error, 只读属性不能赋值

type T00 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'> // "b" | "d"
type T01 = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>
type Person = { age: number; name: string; alive: boolean }
type I1 = Person['age' | 'name']
type I2 = keyof Person
const a8: I2 = 'age'

type RecordExample = Record<string, number>
const record: RecordExample = {
  a: 1,
  b: 2,
  c: 3,
}

/** @type {number} */
var x

x = 0 // OK
x = false // Error: boolean is not assignable to number
