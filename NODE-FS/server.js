let http = require('http')  //引入http核心模块， 来创建web服务器
let fs = require('fs') //操作服务器的资源文件

let server = http.createServer()

server.on('request', (req, res) => {
  let url = req.url
  if (url === '/') {
    fs.readFile('./resource/hy.jpg', (error, data) => {
      if(error){
        res.setHeader('Content-Type', 'text/plain; charset=utf/8')
        res.end('你需要的资源不存在')
      }
      else{
        res.setHeader('Content-Type', 'image/jpeg')
        res.end(data)
      }

    })   //自带方法去读取服务器上的文件
  }
})


server.listen(3000, () => {
  console.log('服务器已启动')
})