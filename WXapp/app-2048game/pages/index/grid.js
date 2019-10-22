class Grid {
  constructor(size) {
    // new 
    this.size = size
    this.grid = this.init()
  }
  init () {
    let grid = []
    for (let i = 0; i < this.size; i++){
      grid[i] = []
      for (let j = 0; j<this.size; j++){
        grid[i].push('');
      }
    }
    return grid;
  }
  //把空格子挑出来
  userFulCell() {
    let cells = [];
    for (let i = 0; i < this.size; i++){
      for (let j = 0; j<this.size; j++){
        if(this.grid[i][j] == '') {
          cells.push({
            i,
            j
          })
        }
      }
    }
    return cells;
  }
  //从一堆空格子中 随机拿一个
  selectCell() {
    let unUsed = this.userFulCell(); //4
    let index = Math.floor(Math.random() * unUsed.length); //取值范围为 0~3
    return unUsed[index]
  }
}
// module.exports返回全局共享的变量或者方法
module.exports = Grid;