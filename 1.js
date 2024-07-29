console.log('1.js')
function delay(time = 2000) {
  const now = Date.now()
  while (Date.now() - now < time) {
    // ...
  }
}

delay()
console.log('1.js -- end')
