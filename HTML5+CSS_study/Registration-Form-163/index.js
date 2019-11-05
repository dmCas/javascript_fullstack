const tab = document.getElementById('tabsUl')
const lis = tab.getElementsByTagName('li')
const as = document.getElementsByTagName('a')
const ico = document.getElementById('icon_1')
const ico2 = document.getElementById('icon_2')
const ico3 = document.getElementById('icon_3')
  for(let i=0; i<lis.length;i++){
    lis[0].onclick = function(){
      tab.setAttribute('class','tab1-on')
      tab.style.cssText="   background-position:-360px -432px;";
      lis[1].as.style.color="white"
      lis[0].as.style.color="black"
    }
    lis[1].onclick = function(){
      tab.setAttribute('class','tab2-on')
      tab.style.cssText=" background-position:0 -432px;";
      lis[1].as.style.color="white"
      lis[0].as.style.color="black"
    }
  }

  //检查邮箱
  function checkEmail(){
    var email = document.getElementById('email').value;
    // console.log(email.split("",1)[0])
    // console.log(email)
    var reg = /^[a-z0-9]\w/i;
    var reg1= /^[A-Za-z]+$/;
    if(!reg.test(email)){  
        document.getElementById('warn-1').style.cssText="display:block;";
        // document.getElementById('txt').innerText="";
              //符合规则  
      //         spanNode.innerHTML = "".fontcolor("green");  
      //         document.getElementById("emailclass").className = "icon ticker";    
              return false;  
        }
    else{
      // console.log(reg1.test(email.split("",1)[0]))
      if(reg1.test(email.split("",1)[0])){
        ico.setAttribute('class','ico-suc-sml')
        document.getElementById('warn-1').style.cssText="display:none;";
        document.getElementById('txt-1-1').innerText="恭喜，该邮件地址可注册";
        return true;
      }
      else{
        document.getElementById('txt').innerText="";
        document.getElementById('warn-1').style.cssText="display:block;";
        document.getElementById('txt-1-2').innerText="邮件地址必需以英文字母开头";
        return false; 
      }
     
    }
  }
  
  //检查密码
  function checkPas(){
    var reg2  = /^.*(?=.{6,}).*$/;
    var pas = document.getElementById('password').value;
    if(!reg2.test(pas)){
      ico2.setAttribute('class', 'ico-warn-sm2')
      document.getElementById('txt-2').innerHTML=" 密码长度应为6~16个字符";
      document.getElementById('txt-2').style.color="red";
      document.getElementById('password').style.background="#f1bbba";
      document.getElementById('password').style.border = "1px solid red";
      return false;
    }
    else{
      ico2.setAttribute('class','ico-suc-sml')
      // console.log(ico2)
      document.getElementById('txt-2').innerHTML="该密码符合要求";
      document.getElementById('txt-2').style.color="grey";
      document.getElementById('password').style.background="#fff";
      document.getElementById('password').style.border = "1px solid #6E7783 ";
      return true;
    }
  }
  //验证密码
  function checkPas1(){
    var pas2 = document.getElementById('password2').value;
    console.log(pas2)
    console.log(document.getElementById('password').value)
    console.log(pas2 === document.getElementById('password').value)
    if(pas2 === document.getElementById('password').value){
      ico3.setAttribute('class','ico-suc-sml')
      // console.log(ico2)
      document.getElementById('xytxt-2').innerHTML="效验成功";
      document.getElementById('xytxt-2').style.color="grey";
      document.getElementById('password2').style.background="#fff";
      document.getElementById('password2').style.border = "1px solid #6E7783 ";
      return true;
    }
    else{
      console.log(123)
      ico3.setAttribute('class', 'ico-warn-sm2')
      document.getElementById('xytxt-2').innerHTML=" 两次密码不一致";
      document.getElementById('xytxt-2').style.color="red";
      document.getElementById('password2').style.background="#f1bbba";
      document.getElementById('password2').style.border = "1px solid red";
      return false;
    }
  }
  
  function yzmWarn(){
    const yzmtxt = document.getElementById('yzmtxt')
    console.log(yzmtxt)
    yzmtxt.style.color = "#FDD692"
  }
  function yzmH(){
    const yzmtxt = document.getElementById('yzmtxt')
    yzmtxt.style.color = "grey"
  }