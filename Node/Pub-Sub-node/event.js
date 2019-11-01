// // 
// const Event = require('events');
// const ev = new Event();
// // 订阅
// ev.on('price', (a,b)=>{
//   console.log(a, b, '涨价了');
// })

// ev.on('price', (a,b)=>{
//   console.log(a, b, '涨价了');
// })
// //发布
// ev.emit('price', 'MAC', 'YSL');

// 手写 发布订阅  模式核心代码
class Events {
  constructor(){
    this.listener = [];
  }
  on(key,fn) {
    if(!this.listener[key]){
      this.listener[key] = []
    }
    this.listener[key].push(fn)
    // this.listener.push(fn);
  }
  emit(key) {
    // for( let fn of this.listener) {
    //   fn()
    // }
    //发布,找对对应的订阅模式
    // console.log(this.listener[key].length);
    for (let i=0; i<this.listener[key].length;i++){
      this.listener[key][i]();
    }
  }
}

const ev = new Events();
ev.on('abc',()=>{
  console.log(1)
})
ev.on('abc',()=>{
  console.log(2)
})

ev.emit('abc'); // 执行的


// const subPub = {
//   'price': [
//     ()=>{ console.log(3)},
//     ()=>{ console.log(4)},
//   ],
//   'paraer':[]
// }
// // 把price 对应的啊方法都执行一遍
// for(let fn of subPub.price){
//   fn()
// }

// function foo() {
//   console.log('foo')
// }
// // 在 subPub 上面添加一个 value 为数组的 key(foo)
// // 把foo()添加到数组中去
// subPub.foo = [foo];
// // subPub.price.push(foo)
// console.log(subPub)