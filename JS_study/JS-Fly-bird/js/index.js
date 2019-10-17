var jsWrapBg = document.querySelector('.wrapBg');
var jsheaderTitle = document.querySelector('.header-title');
var jsheaderBird = document.getElementById('header_bird')
var blocksArr = []
var blockDistance = baseObj.randomNum(120, 350)
var Y =3
var index =0
var imgArr = ["./img/bird0.png", "./img/bird1.png"]


var headWaveTimer = setInterval(headWave, 200)

var jsGrassLand1 = document.getElementById("grassLand1")
var jsGrassLand2 = document.getElementById("grassLand2")

var landTimer = setInterval(landRun, 30)
//小鸟逐帧动画
function headWave(){
  Y *= -1 //Y= Y*-1
  jsheaderTitle.style.top = jsheaderTitle.offsetTop + Y + "px"
  jsheaderBird.src = imgArr[index++]
  if (index === 2) {
    index = 0 
  }
}

  function landRun(){
    if(jsGrassLand1.offsetLeft <=  -343){
      jsGrassLand1.style.left="343px"
    }
    if(jsGrassLand2.offsetLeft <=  -343){
      jsGrassLand2.style.left="343px"
    }

    if(blocksArr.length) {
      for(var i =0; i<blocksArr.length; i++){
        blocksArr[i].moveBlock()
        var x = baseObj.rectangleCrashExamine(blocksArr[i].downDivWrap,bird.div)
        var y = baseObj.rectangleCrashExamine(blocksArr[i].upDivWrap,bird.div)
        var z = bird.div.offsetTop >= 390
        if( x || y || z){
          bird.fallSpeed = 0
          clearInterval(landTimer)
          jsWrapBg.onclick = null
        }
      }
      if(blocksArr[blocksArr.length-1].downDivWrap.offsetLeft < (450 - blockDistance)){
        blockDistance = baseObj.randomNum(130, 250)
        var newBlock = new Block()
        newBlock.createBlock()
        blocksArr.push(newBlock)
      }
      //移除多余的Dom节点 清理内存
      if(blocksArr[0].downDivWrap.offsetLeft < -50){
        jsWrapBg.removeChild(blocksArr[0].downDivWrap)
        jsWrapBg.removeChild(blocksArr[0].upDivWrap)
        blocksArr.shift(blocksArr[0])
      }
    }
    jsGrassLand1.style.left = jsGrassLand1.offsetLeft - 3 + "px"
    jsGrassLand2.style.left = jsGrassLand2.offsetLeft - 3 + "px"
  }

 
  var jsStartBtn = document.getElementById('startBtn')
  jsStartBtn.onclick = function() {
    jsheaderTitle.style.display = "none"
    clearInterval(headWaveTimer)
    jsStartBtn.style.display = "none"
    //出现小鸟
    bird.showBird(jsWrapBg)
    bird.flyBird()
    
    jsWrapBg.onclick = function(){
      bird.fallSpeed = -8
    }
    bird.wingWave() //煽动翅膀

    var b = new Block()
    b.createBlock()
    // b.moveBlock()
    blocksArr.push(b)
  }