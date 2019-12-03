// 执行命令行命令 -> npm i cheerio --save

const https = require('https');
const http = require('http');
const cheerio = require('cheerio');

// doubanSpider('https://movie.douban.com/top250?start=225&filter=', (data) => {
//   // 得到结果
//   console.log(data);  
// })
function doubanSpider(url, cb){
  https.get(url, 
    (res) => {
      let html = '';
      // 流的形式
      res.on('data', (chunk) => {
        html += chunk;
      })
    res.on('end', () => {
    // console.log(html)
    // jquery 
    const $ = cheerio.load(html);
    let movies = [];
    let Hotel = [];
    // $('li .item').each(function() {
    //   //拿到每一个电影
    //   const picUrl = $('.pic img', this).attr('src');
    //   const title = $('.info .title', this).text();
    //   const star = $('.star .rating_num', this).text();
    //   const inq = $('.inq' ,this).text();
    //   console.log( {
    //     picUrl,
    //     title,
    //     star,
    //     inq
    //   })
    //   movies.push({
    //     picUrl,
    //      title,
    //      star,
    //      inq
    //   })
    // })
    // for (let i = 0; i < 5; i++) {
    //   console.log($('._xsoek6').text())
    // }
    const book = $('._xsoek6', html)
    let list = book.find('._10nyrxy')
    console.log(list.length)
    console.log(list.text())
    $('._xsoek6').each(function() {
      const desc = $('._qdkfkm',this).text();
      Hotel.push(desc)
    })
    cb(Hotel);
    // cb(movies);
  })
})
} 

http.createServer((req, res) => {
  doubanSpider('https://www.airbnb.cn/?af=43896654&c=.pi9.pkbaidu_brd_brandzone_demand_title_p1&src=Baidu&medium=PPC&ag_kwid=2299-36-57701246c0b98773.6a0cc0f87b49337e',
  (data) => {
    // 响应头 响应json文件
    // text/plain 纯文本 text/html html <- minme 类型
    console.log('data', data);
    res.writeHead(200, {
      'Content-type': 'application/json',
      'Access-Control-Allow-origin': '*'
    })
    res.end(JSON.stringify(data)) //对象 -> 字符串
  })
}).listen(3000, () => {//监听3000号端口
  console.log('server is running 3000');
})


