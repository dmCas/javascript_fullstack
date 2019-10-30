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
    console.log(email)
    var reg = /^[a-z0-9]\w/i;
    if(!reg.test(email)){  
        document.getElementById('warn-1').style.cssText="display:block;";
        document.getElementById('txt-1').innerHTML=" ";
              //符合规则  
      //         spanNode.innerHTML = "".fontcolor("green");  
      //         document.getElementById("emailclass").className = "icon ticker";    
              return false;  
        }
    else{
      document.getElementById('warn-1').style.cssText="display:none;";
      document.getElementById('txt-1').innerHTML="√ 恭喜，该邮件地址可注册";
      document.getElementById('icon-1').style.cssText="display:block;";
      return true;
    }
  }

  //检查密码
  function checkPas(){
    var reg2  = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z]).*$/;
    var pas = document.getElementById('password').value;
    if(!reg2.test(pas)){
      document.getElementById('txt-2').innerHTML="x 密码长度应为6~16个字符";
      document.getElementById('txt-2').style.color="red";
      document.getElementById('password').style.background="#f1bbba";
      document.getElementById('password').style.border = "1px solid red";
      console.log(321)
      return false;
    }
    else{
      console.log(123)
      document.getElementById('txt-2').innerHTML="该密码符合要求";
      document.getElementById('txt-2').style.color="grey";
      document.getElementById('password').style.background="#fff";
      document.getElementById('password').style.border = "1px solid #6E7783 ";
      return true;
    }
  }