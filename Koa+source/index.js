// let http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello world')
// })

// server.listen(3000, ()=>{
//   console.log('服务跑起来了。。。')
// })

// 引入koa
// const Koa = require('./lib/application')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello i'
// })

// app.listen(3000)

let myKoa = require('./lib/application')
let app = new myKoa()

app.use((ctx,next) => {
  ctx.body = {
    name = 'wn',
    age: 19
  }
  console.log(ctx.body)
  next()
})


app.use((ctx,next) => {
  console.log(1)
  next()
})


app.use((ctx,next) => {
  console.log(2)
  next()
})

app.listen(3001)