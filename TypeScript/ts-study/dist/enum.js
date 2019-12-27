"use strict";
var yg;
(function (yg) {
    yg[yg["No"] = 0] = "No";
    yg["Yes"] = "Yes";
})(yg || (yg = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = -1] = "Up";
    Direction[Direction["Down"] = 0] = "Down";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Right"] = 2] = "Right";
})(Direction || (Direction = {}));
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
})(Animal || (Animal = {}));
aaa = Direction.Up;
(function (Direction) {
    Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
//# sourceMappingURL=enum.js.map