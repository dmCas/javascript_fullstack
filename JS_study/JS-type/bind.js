  //call apply bind -> 公共作用 绑定this 指向
  
  // call apply
  // bind   // 返回一个函数, 达到 (参数柯里化 (curry)) 
            // (固定参数的目的)
  function add(a, b, c){
    return a + b + c;
  }
  const add10 = add.bind(null, 10);
  console.log(add10(20, 30));