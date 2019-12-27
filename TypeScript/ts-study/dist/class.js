"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person() {
    }
    Person.prototype.move = function () {
        console.log('roaming this earch...');
    };
    return Person;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.makeSound = function () {
        console.log('maio maio');
    };
    return Child;
}(Person));
var child = new Child();
child.makeSound();
var Baby = (function () {
    function Baby() {
    }
    Baby.prototype.run = function () {
        console.log('跑起来了');
    };
    Baby.prototype.eat = function () {
        console.log('会说话了');
    };
    Baby.prototype.sleep = function () {
        console.log('会唱歌了');
    };
    return Baby;
}());
var XiaoHong = (function (_super) {
    __extends(XiaoHong, _super);
    function XiaoHong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XiaoHong.prototype.init = function () {
        this.sleep();
    };
    return XiaoHong;
}(Baby));
var baby = new Baby();
baby.run();
var pig = new XiaoHong();
pig.init();
pig.run();
//# sourceMappingURL=class.js.map