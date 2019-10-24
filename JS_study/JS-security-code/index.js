const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const width = 200, height = 50;
ctx.width = width + "px";
ctx.height = height + "px";
canvas.addEventListener('click', function() {
  ctx.clearRect(0,0, width, height);
  drawLine();
  drawText();
})

function drawLine(){
  for (let i=0; i<6; i++){
    let beiginX = Math.random() * 200;
    let beiginY = Math.random() * 50;
    let endX = Math.random() * 200;
    let endY = Math.random() * 50;
    ctx.beginPath();
    ctx.moveTo(beiginX, beiginY);
    ctx.lineTo(endX,endY);
    ctx.strokeStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    ctx.stroke();
  }
}
drawLine()
drawText()
function drawText(){
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
    ctx.font = '40px Helvetica';
    ctx.fillStyle = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    // 基准线
    ctx.textBaseLine = 'middle'; // top bottom
    let preWidth =width / 4 - 10;
    ctx.fillText(result[i], Math.random() * preWidth + i*preWidth, height/2);

  }
}

  