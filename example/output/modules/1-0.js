
_cmd_define('/modules/1-0.js', function(_cmd_require, exports, module) {
// @require /static/require.js

var cal = _cmd_require('/modules/cal.js');
console.log('work');
// 1 - 0
console.log(cal.min(1, 0));
});
