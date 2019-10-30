    var a = [];
    console.log(a.constructor === Array);  //true
    var b =null;
    var c =undefined;
    function Foo() {}
    var a = new Foo();
    a.constructor = Foo;
    console.log(a.constructor === Array)// null undefined
    // constructor 会被改掉
