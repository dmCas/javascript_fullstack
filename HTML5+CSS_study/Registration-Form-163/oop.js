// 抽象
const width = 135, height = 60;
class Gcode{
  constructor(el) {
    this.$el = document.getElementById(el);
    this.ctx = this.$el.getContext('2d');
    this.$el.width = width;
    this.$el.height = height;
    this.drawLine();
    this.drawText();
    let that = this;
    this.$el.addEventListener('click', () => {
      this.ctx.clearRect(0,0, width, height);
      this.drawLine();
      this.drawText();
    })
  }
  drawLine(){
    for (let i=0; i<30; i++){
      let beiginX = Math.random() * 50;
      let beiginY = Math.random() * 50;
      let endX = Math.random() * 200;
      let endY = Math.random() * 50;
      this.ctx.beginPath();
      this.ctx.moveTo(beiginX, beiginY);
      this.ctx.lineTo(endX,endY);
      this.ctx.strokeStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
      this.ctx.stroke();
    }
  }
  drawText(){
    var sourceText = ['a', 'b', 'c',
    'd', 'e', 'f','g', 
    'h', 'i','j', 'k', 
    'l', 'm', 'n','o', 
    'p', 'q','r', 's',
    't', 'u', 'v','w',
    'x', 'y', 'z']
    let result = [];
    // 4 随机 不重复
    for(let i=0; i<4; i++){
      const idx = Math.floor(Math.random() * sourceText.length)
      result.push(sourceText[idx]);
      // push之后删掉原数组中的数据，防止重复
      sourceText.splice(idx, 1);
    }
    console.log('result', result);
    for (let i=0; i<result.length; i++){
      //
      this.ctx.font = '40px Helvetica';
      this.ctx.fillStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
      // 基准线
      this.ctx.textBaseLine = 'middle'; // top bottom
      let preWidth =width / 4 - 10;
      this.ctx.fillText(result[i], Math.random() * preWidth + i*preWidth, height/2);
  
    }
  }
}

// 实例
let obj = new Gcode('screen');
let obj1 = new Gcode('screen1');
let obj2 = new Gcode('screen2');