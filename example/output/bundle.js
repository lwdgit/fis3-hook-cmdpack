;/*!/modules/cal.js*/

(function(d){if(d._cmd_require){return;}var c={};var b={};var e=function(g,f){g=g.replace(/\.js$/i,"");c[g]=f;},a=function(i){i=i.replace(/\.js$/i,"");var h=b[i];if(h){return h.exports;}var f=c[i];if(!f){throw"Cannot find module `"+i+"`";}h=b[i]={exports:{}};var g=(typeof f==="function")?f.apply(h,[a,h.exports,h]):f;if(g){h.exports=g;}return h.exports;};d._cmd_require=a;d._cmd_define=e;d.require=d.require||a;d.define=d.define||e;}(this));
;
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

;/*!/modules/1-0.js*/

_cmd_define('/modules/1-0.js', function(_cmd_require, exports, module) {
// @require /static/require.js

var cal = _cmd_require('/modules/cal.js');
console.log('work');
// 1 - 0
console.log(cal.min(1, 0));
});

;/*!/modules/2-0.js*/

_cmd_define('/modules/2-0.js', function(_cmd_require, exports, module) {
/**
 * 这个模块将会被异步加载进来
 */
_cmd_require('/modules/sub/a.js');
alert('2-0.js loaded');

});

;/*!/modules/sub/a.js*/

_cmd_define('/modules/sub/a.js', function(_cmd_require, exports, module) {
_cmd_require('/modules/cal.js');
});
