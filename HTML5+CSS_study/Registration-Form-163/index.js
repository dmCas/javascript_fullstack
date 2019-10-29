const tab = document.getElementById('tabsUl')
const lis = tab.getElementsByTagName('li')
  for(let i=0; i<lis.length;i++){
    lis[0].onclick = function(){
      tab.setAttribute('class','tab1-on')
      tab.style.cssText="   background-position:-360px -432px;";
    }
    lis[1].onclick = function(){
      tab.setAttribute('class','tab2-on')
      tab.style.cssText=" background-position:0 -432px;";
    }
  }