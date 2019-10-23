- restful web
  一切皆资源
  Dom + CSS + JS
  URL Universal Resource Location
  http://www.taobao.com/shop/1/good/2
  明确的表达 它的资源是什么意思？

- npm init -y 从前端， 加入后端
  scripts 脚步区域 可以执行一些命令
  json-server npm 包 -> 在url 上将我们的json文件向外暴露
  json 资源 restful 
  - 语义化的URL
  :1314/posts GET请求 文章列表 :1314/posts/:id 详情
  GET url 明文访问
  POST 新增数据(提交表单)
  PUT 修改数据 PATCH 修改数据 
  DELETE 删除数据

  url + 谓语动词 
  PUT 覆盖
  PATCH 局部修改
  
  - :8080 live-server 启动web页面
    :1314 json-server 启动了后端API
    不同的端口 代表不同的服务
    前后端 全栈
