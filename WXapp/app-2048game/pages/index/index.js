//index.js
//获取应用实例
const app = getApp()
const Grid = require('./grid.js')
Page({
  data: {
    num: null
  },
  onLoad: function(){
    const gameGrid = new Grid(4);
    // 两个格子
    this.game = gameGrid
    this.addRandomData();
    this.addRandomData();
    this.setData({
      num: gameGrid.grid
    })
    // console.log(gameGrid.grid)
  },
  addRandomData: function() {
    //选出空格子 返回一个坐标
    let cell = this.game.selectCell();
    // console.log(cell)
    this.game.grid[cell.i][cell.j] = Math.random () > 0.5? 2:4;
  },
  game: null,
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
  touchstart: function(event) {
    const touch = event.touches[0]; //只取第一次触摸
    //取到手指起点 距离屏幕 左上顶点的坐标
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  },
  touchmove: function(event) {
    const touch = event.touches[0];
    this.endX = touch.clientX;
    this.endY = touch.clientY;
  },
  touchend: function(event){
    console.log(this.startX, this.startY, this.endX, this.endY)
    const disX = this.startX - this.endX //在X轴上的偏移
    const disY = this.startY - this.endY //在Y轴上的偏移
    const absDisX = Math.abs(disX)
    const absDisY = Math.abs(disY)
    if(absDisX > 10 || absDisY > 10) {
      //  上 右 下 左 -> 0 1 2 3
      var direction = absDisX > absDisY ? (disX < 0? 1:3) : (disY < 0? 2:0)
      console.log(direction)
      this.move(direction)
    } 
  },
  move: function(direction) {
      // 数字合并
      this.combine()
  },
  combine: function() {
    //数字滑动 把数字靠边
    let res = this.slideNum(['', 2, '', 2])
    console.log('数字靠边',res)
  },
  slideNum: function(arr) {
    //输入 ['', 2, '', 2] -> 输出 [2, 2, '', '']
    let current = 0
    for (let i=0; i < arr.length; i++){
      if(arr[i] !== ''){
        arr[current++] = arr[i]
      } 
    }
 
    for(let j = current; j<arr.length;j++){
      arr[j] = ''
    }
    return arr
  }
  // [2, 2, '', 2]
})
