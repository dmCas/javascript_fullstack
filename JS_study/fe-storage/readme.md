## localStorage
永久性

## sessionStorage
当前这次会话


## cookie
domain: cookie 生效的域
.baidu.com: pan.baidu.com zhidao.baidu.com  // 所有的子域名都可以拿到cookie
map.baidu.com
path: 路径
/
/mobile

domain + path : 构成 cookie 生效的范围

expires/max-age: 生效的时间

httpOnly:
cookie: 1.服务器 2.js 如果为true， cookie 不可以被 js操作
secure: 只在 https 环境下 传输 cookie