var snippets = require('./snippets');
var path = require('path');

module.exports = function(fis, opts) {

    var settings = opts || {};
    settings.tab = settings.tab && !isNaN(settings.tab) ? ' '.repeat(settings.tab) : '    ';//设置缩进数
    
    var defineWrap = snippets('defineWrap'),
    mod = snippets('mod');

    var pack = {};
    fis.on('pack:file', function(info) {//含file content pkg
        if (!pack[info.pkg.id]) {
            pack[info.pkg.id] = true;
            if (info.file.cmdpack) {//如果设置的cmdpack字段
                //将define require加在pack最前面
                info.content = mod + '\n' + info.content; 
            }
        }
    });
    
    fis.on('release:end', function() {
        pack = {};
    });

    fis.on('compile:postprocessor', function(file) {
        
        if (file.cmdpack) {
            var content = settings.tab + file.getContent().split(/\r\n|\n|\r/).join('\n' + settings.tab);//添加缩进
            content = defineWrap.replace(/\$id/, file.url).replace(/\$content/, content);
  
            //将相对路径id转绝对路径id
            content = content.replace(/\brequire\('([^']+)/g, function(str, id) {
                id = path.join(file.subdirname, id).replace(/\\/g, '/');
                return '_cmd_require(\'' + id;
            });
            file.setContent(content);
        }
    });
};
