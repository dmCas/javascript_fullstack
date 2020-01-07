"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var M = function M() {
  (0, _classCallCheck2.default)(this, M);
};

new M();
var p = new Promise(function (resolve, reject) {
  resolve(1);
});
p.then(function (r) {
  console.log(r);
});
var set = new Set([1, 2]);