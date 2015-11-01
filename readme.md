# fis3-hook-cmdpack


> 一个自动将cmd模块打包成amd模块，且**无需引入模块加载器**(如require)的插件(FIS3 Only)。


#usage

```fis-conf.js
fis.hook('cmdpack');
fis.match('modules/**', {
    cmdpack: true,
    packTo: 'bundle.js'
});

fis.match('cal.js', {
    packOrder: -100
});

```

#example

See example.