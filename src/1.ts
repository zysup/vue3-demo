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

if (parent) {
  console.log('parent', parent)
  setTimeout(() => {
    parent.location.href = 'http://www.google.com'
  }, 5000)
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

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12 // error: Index signature in type 'ReadonlyArray<number>' only permits reading
// a = ro // error: Cannot assign to 'a' because it is a constant or a read-only property
// a = ro as number[] // 可以通过类型断言绕过错误
// class Animal {
//   name: string
//   constructor() {
//     this.name = 'Animal'
//   }
// }
// class Dog extends Animal {
//   breed: string
//   constructor(name: string, breed: string) {
//     super()
//     this.name = name
//     this.breed = breed
//   }
// }

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: string]: Animal
//   [x: number]: Dog
// }
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
  swim(): any
  layEggs(): any
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

;(function () {
  /**
   * 以 abstract 开头的类是抽象类，不能用于创建对象，只能被继承
   * 抽象类中可以添加抽象方法
   */
  abstract class Animal {
    name: string
    constructor(
      name: any,
      public gender = '男',
    ) {
      this.name = name
    }
    sayHello() {
      console.log(`${this.name}动物在叫`)
    }
    /**
     * 定义一个抽象方法
     * 抽象方法以 abstrack 开头，没有方法体
     * 抽象方法只能定义在抽象类中，并且子类必须对抽象方法进行重写
     */
    // abstract sayHello123(a: number): void
  }

  class Dog extends Animal {
    age: number
    constructor(name: string, age: number) {
      super(name, '女')
      this.age = age
    }
    sayHello2() {
      super.sayHello()
      // console.log('动物在叫');
      // console.log('汪汪汪');
    }
  }
  class Car {}
  class Bird extends Car {}
  const bird = new Bird()
  const dog = new Dog('旺财', 199)
  dog.sayHello2()
  console.log('qwe dog', dog, Object.getPrototypeOf(dog), Dog.prototype, dog.constructor)
  console.log('qwe bird', bird, Object.getPrototypeOf(bird), Bird.prototype)
})()
