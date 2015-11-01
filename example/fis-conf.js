fis.hook('cmdpack');
fis.match('modules/**', {
    cmdpack: true,
    packTo: 'bundle.js'
});

fis.match('cal.js', {
    packOrder: -100
});