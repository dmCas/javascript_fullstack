    // 方法一
    function isType(type, value) {
      return Object.prototype.toString.call(value) === `[object ${type}]`;
    }
    console.log(isType('String','123'));
    

    // 方法二
    // 与上面函数作用相同，但是代码更优
    // function isString(value) {
    //   return isType('String', value)
    // }
    // function isFunction(value) {
    //   return isType('Function', value)
    // }
    // function isNumber(value) {
    //   return isType('Number', value)
    // }

    // 方法三
    const isString = isType.bind(null, 'String');
    const isFunction = isType.bind(null, 'Function');
    console.log(isString('123'));


    function add(a,b) {
      return a+b;
    }
    function add_5(b){
      return add(5,b);
    }

    

    // 是否可以找到一种方法 能把所有函数的第一个参数 固定住
    // console.log(isString('123'));
    // console.log(isFunction(() => {}));
    // console.log(isNumber(9999));


    // 函数式编程 过程抽象
    // 面向对象 数据抽象
     
