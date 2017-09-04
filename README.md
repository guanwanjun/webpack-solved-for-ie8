#webpack-solved-for-ie8

This is a simple example for solving webpack packaging on ie8 brower, has tested on webpack2.6.1.

##安装

`npm install -d`

##为了方便查看示例代码，安装一个简单的服务器

`npm install http-server -gd`


##在项目目录下启动服务

`http-server -p 8282`

##通过访问来查看

http://127.0.0.1:8282

##谈谈上述简单示例是如何解决ie8下webpack的打包问题的

1.给公用起始文件引入 require('babel-polyfill');

2.给插件配置要支持ie8的选项

    ```new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,//if you want to see uglifyjs warnings, you need to set compress.warnings to true
            screw_ie8 : false
        },
        mangle: {
            screw_ie8: false
        },
        output: { screw_ie8: false }
    })```

关于1，Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。如果想要这些方法运行，就得使用babel-polyfill

关于2，如果不做这个配置，压缩出来的js会使用一些ie8默认的关键字，比如.default,.catch...。

