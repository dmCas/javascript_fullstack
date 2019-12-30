var koa = require('koa');
var app = new koa();

app.use((ctx, next) => {
  console.log(1)
  next();
  console.log(5)
});

app.use((ctx, next) => {
  console.log(2)
  next();
  console.log(4)
});

app.use((ctx, next) => {
  console.log(3)
  ctx.body = 'Hello World';
  next();
});

app.listen(3000);
// 访问http://localhost:3000
// 打印出1、2、3、4、5
