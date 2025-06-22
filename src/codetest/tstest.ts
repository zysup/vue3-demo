// TypeScript 常用类型操作示例

// 1. 类型别名
type UserId = string | number

// 2. 接口 interface
interface User {
  id: UserId
  name: string
  age?: number // 可选属性
}

// 3. 联合类型 & 交叉类型
type Status = 'success' | 'error' | 'loading'
type WithTimestamp<T> = T & { timestamp: number }

// 4. 字面量类型
const direction: 'left' | 'right' = 'left'

// 5. 类型断言
const el = document.getElementById('app') as HTMLDivElement

// 6. 泛型
function identity<T>(arg: T): T {
  return arg
}
const num = identity<number>(123)

// 7. 类型守卫
function isString(val: unknown): val is string {
  return typeof val === 'string'
}

// 8. 索引类型
type Person = { name: string; age: number }
type PersonKeys = keyof Person // 'name' | 'age'
type NameType = Person['name'] // string

// 9. 条件类型
type IsString<T> = T extends string ? true : false
type Test1 = IsString<'abc'> // true
type Test2 = IsString<123> // false

// 10. 映射类型
type PartialPerson = { [K in keyof Person]?: Person[K] }

// 11. 内置工具类型
type PartialUser = Partial<User>
type ReadonlyUser = Readonly<User>
type PickUser = Pick<User, 'id' | 'name'>
type OmitUser = Omit<User, 'age'>
type RecordMap = Record<'a' | 'b', number>
type ExcludeTest = Exclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
type ExtractTest = Extract<'a' | 'b' | 'c', 'a' | 'd'> // 'a'
type NonNullableTest = NonNullable<string | null | undefined> // string

// 12. const enum
const enum Color {
  Red,
  Green,
  Blue,
}
const c: Color = Color.Green

// 13. declare enum
// 声明外部枚举（通常用于类型声明文件）
declare enum ExternalEnum {
  A = 1,
  B = 2,
}

// 14. typeof
const obj = { x: 1, y: 2 }
type ObjType = typeof obj

// 15. infer
type ReturnTypeTest<T> = T extends (...args: any[]) => infer R ? R : any
type Fn = (a: number) => string
type FnReturn = ReturnTypeTest<Fn> // string

// 16. never/unknown
function error(msg: string): never {
  throw new Error(msg)
}
let input: unknown = 'abc'
if (typeof input === 'string') {
  // input 在这里是 string
}

// 17. 可选链与空值合并
const user: User = { id: 1, name: 'Tom' }
const userName = user?.name ?? '匿名'

// 18. 索引访问类型
type Company = { boss: { name: string } }
type BossName = Company['boss']['name'] // string

// 19. 只读属性
type ReadonlyPerson = Readonly<Person>

// 20. 函数类型别名
type Add = (a: number, b: number) => number

// 21. 字符串模板类型
type EventName<T extends string> = `on${Capitalize<T>}`
type ClickEvent = EventName<'click'> // 'onClick'

// 22. 索引签名
interface StringMap {
  [key: string]: string
}

// 23. 泛型约束
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length
}

// 24. 联合类型分布
type ToArray<T> = T extends any ? T[] : never
type StrOrNumArray = ToArray<string | number> // string[] | number[]

// 25. 交叉类型示例
type A = { a: number }
type B = { b: string }
type AB = A & B // { a: number; b: string }

// 26. 类型守卫（自定义）
function isNumber(val: unknown): val is number {
  return typeof val === 'number'
}

// 27. 联合类型类型保护
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id.toFixed(2))
  }
}

// 28. 类型断言 as const
const arr = [1, 2, 3] as const
type ArrType = typeof arr // readonly [1, 2, 3]

// 29. 函数重载
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any): any {
  return a + b
}

// 30. 泛型默认类型
function wrap<T = string>(x: T): T[] {
  return [x]
}

// 31. 基础类的定义与使用（TypeScript）
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  speak() {
    console.log(`${this.name} makes a noise.`)
  }
}

// 32. 继承与方法重写
class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }
  speak() {
    console.log(`${this.name} barks.`)
  }
}

const dog = new Dog('Buddy')
dog.speak() // Buddy barks.

// 33. 泛型类
class Box<T> {
  value: T
  constructor(value: T) {
    this.value = value
  }
  getValue(): T {
    return this.value
  }
}
const stringBox = new Box<string>('hello')
const numberBox = new Box(123)

// 34. 类实现接口
interface Logger {
  log(message: string): void
}
class ConsoleLogger implements Logger {
  log(message: string) {
    console.log('Log:', message)
  }
}

// 35. 与 JS 类互操作
// 假设有如下 JS 类（可在 JS 文件中定义）
// class JSPoint {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   move(dx, dy) {
//     this.x += dx
//     this.y += dy
//   }
// }
// TypeScript 中使用 JSPoint
// @ts-ignore
const jsPoint = new (window as any).JSPoint(1, 2)
jsPoint.move(3, 4)
console.log(jsPoint.x, jsPoint.y)

// 36. 类型声明增强 JS 类体验
declare class JSPoint {
  x: number
  y: number
  constructor(x: number, y: number)
  move(dx: number, dy: number): void
}
// 现在可以获得类型提示
const point2 = new JSPoint(5, 6)
point2.move(1, 1)

// 37. 混合使用 TS/JS 类
// TypeScript 类继承 JS 类
// declare class JSBase {
//   greet(): void
// }
// class TSExtendJS extends JSBase {
//   greet() {
//     super.greet()
//     console.log('Hello from TS!')
//   }
// }

// ...更多类型操作可继续补充
