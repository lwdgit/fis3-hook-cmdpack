
_cmd_define('/modules/cal.js', function(_cmd_require, exports, module) {
// @require /static/mod.js

exports.add = function (a, b) {
    return a + b;
};

exports.div = function (a, b) {
    return a / b;
};

exports.mul = function (a, b) {
    return a * b;
};

exports.min = function (a, b) {
    return a - b;
};
});
