let http = require('http')
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request')
let response = require('./response')

class Koa extends EventEmitter{
  constructor(){
    super()
    this.fn
    this.context = context
    this.request = request
  }
  use (fn) {
    this.fn = fn
  }

  createContext (req, res) {
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    //交叉赋值
    ctx.req = request.req = response.req = req 
    ctx.res = request.res = response.res = res 
    request.ctx = response.ctx
    request.response = response
    response.request = request
    return ctx
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

  handleRequest(req, res) { // 创建一个处理请求的函数
    let ctx = this.createContext(req, res) // 创建了ctx
    this.fn(ctx)
    res.end(ctx.body)
  }

  listen (...args){
    let server = http.createServer(this.fn)
    server.listen(...args)
  }
}

module.exports = Koa