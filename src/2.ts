//@ts-nocheck

class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter1: Greeter
greeter1 = new Greeter()
console.log(greeter1.greet())

let greeterMaker: typeof Greeter = Greeter
Greeter.standardGreeting = 'Hey there!'

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())

console.log(greeter1.greet())

// Named function
function add(x, y) {
  return x + y
}

// Anonymous function
let myAdd = function (x, y) {
  return x + y
}

let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: { suit: string; card: number }[]): number
function pickCard(x: number): { suit: string; card: number }
function pickCard(x): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  }
  // Otherwise just let them pick the card
  else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 },
]
let pickedCard1 = myDeck[pickCard(myDeck)]
// alert('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
// alert('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

// let x = { a: 1, b: 2, c: 3, d: 4 }

// getProperty(x, 'a') // okay
// getProperty(x, 'm') // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

enum E {
  Foo = 1,
  Bar,
}

enum Status {
  Ready,
  Waiting,
}
enum Color {
  Red,
  Blue,
  Green,
}

let status123 = Status[0] // Error
status123 = 1

import './1.js'

type IsString<T> = T extends string ? true : false
type Test1 = IsString<string> // true
type Test2 = IsString<number> // false

type Person = { name: string; age: number }
type ReadonlyPerson = Readonly<Person>

type T = { a: string; b: number; c: string; d: number }
type U = 'a' | 'd'
type Extracted = Extract<T, 'c' | 'd'> // "a"
