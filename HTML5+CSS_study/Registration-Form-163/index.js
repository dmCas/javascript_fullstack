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

  //检查邮箱
  function checkEmail(){
    var email = document.getElementById('email').value;
    var reg = /^[a-z0-9]\w/i;
    if(!reg.test(email)){  
        document.getElementById('warn-1').style.cssText="display:block;";
              //符合规则  
      //         spanNode.innerHTML = "".fontcolor("green");  
      //         document.getElementById("emailclass").className = "icon ticker";    
              return false;  
        }
    else{
      document.getElementById('warn-1').style.cssText="display:none;";
      return true;
    }
  }