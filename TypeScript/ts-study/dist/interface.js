"use strict";
var getUsername = function (user) {
    user.say = function (words) {
        return 'hello world';
    };
};
function CalculateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var mySquare1 = CalculateAreas({ widdth: 5 });
var mySquare2 = CalculateAreas({ widdth: 5 });
var options = { widdth: 5 };
var mySquare3 = CalculateAreas(options);
//# sourceMappingURL=interface.js.map