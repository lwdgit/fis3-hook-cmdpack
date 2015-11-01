
_cmd_define('/modules/2-0.js', function(_cmd_require, exports, module) {
/**
 * 这个模块将会被异步加载进来
 */
_cmd_require('/modules/sub/a.js');
alert('2-0.js loaded');

});
