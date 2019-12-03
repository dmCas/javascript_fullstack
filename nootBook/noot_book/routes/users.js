const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')

router.prefix('/users') //路由前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async(ctx, next) => {
  await userService.getAllUsers()
  .then((res) => {
    console.log('打印结果' + JSON.stringify(res))
    ctx.body = res
  })
})

// 登录
router.post('/userLogin', async(ctx, next) =>{
  //取到前端传过来的key值需为username
  var _username = ctx.request.body.username 
  var _userpwd = ctx.request.body.userpwd
  
  await userService.userLogin(_username, _userpwd)
  .then((res) => { //res代表查询之后返回的内容
    let r = ''
    // console.log(res)
    if(res.length){
      r='ok';
      let result = {
        id: res[0].id,
        nickName: res[0].nickName,
        username: res[0].username
      }
      ctx.body = {
        code: '200',
        data: result,
        mess: '登录成功'
      }
    }
    else{
      r = 'error';
      ctx.body = {
        code: '302',
        data: r,
        mess: '账号或密码错误'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })

})

module.exports = router
