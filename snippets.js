var multline = function (cb) {
    return (cb.toString() + '')
    .replace(/^[\w\W]*?\/\*\!\s{0,1}/, '')
    .replace(/([\w\W]*)\*\/[\w\W]*/, '$1');
};

var snippets = {
    defineWrap: multline(function() {
/*!
_cmd_define('$id', function(_cmd_require, exports, module) {
$content
});
*/
    }),
    mod: multline(function() {
/*!
(function(d){if(d._cmd_require){return;}var c={};var b={};var e=function(g,f){g=g.replace(/\.js$/i,"");c[g]=f;},a=function(i){i=i.replace(/\.js$/i,"");var h=b[i];if(h){return h.exports;}var f=c[i];if(!f){throw"Cannot find module `"+i+"`";}h=b[i]={exports:{}};var g=(typeof f==="function")?f.apply(h,[a,h.exports,h]):f;if(g){h.exports=g;}return h.exports;};d._cmd_require=a;d._cmd_define=e;d.require=d.require||a;d.define=d.define||e;}(this));
*/
    })
};

module.exports = function(id) {
    return snippets[id];
};