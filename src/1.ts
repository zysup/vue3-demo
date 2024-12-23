console.log('qwe', new URL('data.txt', import.meta.url))
// console.log(qwe)
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

import arrayMap from 'array-map-abc'

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
const aabc = arrayMap([1, 2], (item, _) => {
  return item * 2
})
console.log('qwe aabc', aabc)
