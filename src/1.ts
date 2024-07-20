console.log('qwe', import.meta.env)

const aaa = {
  bbb: 1,
}

aaa.bbb &&= 123
// @ts-expect-error qww
aaa.bbb = aaa?.ccc?.ddd ?? '456'
console.log('qweqwe', aaa)

// const wt={bbb:1};wt.bbb&&(wt.bbb=123);
// var ci;
// wt.bbb=((ci=wt==null?void 0:wt.ccc)==null?void 0:ci.ddd)??"456";
// console.log("qweqwe",wt);
