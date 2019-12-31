// var oli = document.getElementsByTagName("li");
// var children = document.querySelectorAll('children')
// for (let i = 0; i < oli.length; i++) {
//   oli[i].onmouseover = function () {
//     children[i].classList.add('b')
//   };
// }



var count = 0;
var rightGo = true;
var timer;
var picWrapper = document.getElementsByClassName('Pic')[0]
var circle = document.getElementsByClassName('dot')
circle[0].classList.add('active')

var Nowleft = -2400
function next() {
  timer = setInterval(() => {
    if (rightGo) {
      if (count >= 2) {
        rightGo = false
      }
      else{
        count++
        Nowleft = parseInt(picWrapper.style.left) + 1200
        picWrapper.style.left = Nowleft + 'px'
      }
      //如果向右滑动了三次

    }
    else {
      count--
      Nowleft = parseInt(picWrapper.style.left) - 1200
      picWrapper.style.left = Nowleft + 'px'
      if (count <= 0) {
        rightGo = true
      }
    }
    Dot(count)
      
  }, 4000)
}
next()

var Dot = function(count){
  for(let i=0; i< circle.length;i++){
    if(count == i){
      circle[i].classList.add('active')
    }
    else{
      circle[i].classList.remove('active')
    }
  }
}
var Left = document.querySelector('.left');
var Right = document.querySelector('.right')
Left.onmouseover = function () {
  clearInterval(timer);
}
Left.onmouseout = function () {
  next();
}
Left.onclick = function () {
  console.log(Nowleft)
  if (count == 0) {
    picWrapper.style.left = -2400 + 'px'
  }
  else {
    count--
    Nowleft = parseInt(picWrapper.style.left) - 1200
    picWrapper.style.left = Nowleft + 'px'
  }
  Dot(count)
}
Right.onclick = function () {
  if (count == 2) {
    picWrapper.style.left = 0 + 'px'
  }
  else {
    count++
    Nowleft = parseInt(picWrapper.style.left) + 1200
    picWrapper.style.left = Nowleft + 'px'
  }
  Dot(count)
}