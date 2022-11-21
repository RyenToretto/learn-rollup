(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var name = "01_hello";
  var version = "1.0.0";
  var description = "学习 rollup";
  var main = "index.js";
  var directories = {
  	example: "example"
  };
  var scripts = {
  	dev: "rollup -c -w",
  	build: "rollup -c",
  	test: "echo \"Error: no test specified\" && exit 1"
  };
  var author = "koujianfeng";
  var license = "ISC";
  var devDependencies = {
  	"@babel/cli": "^7.19.3",
  	"@babel/core": "^7.20.2",
  	"@babel/preset-env": "^7.20.2",
  	"@rollup/plugin-babel": "^6.0.2",
  	"@rollup/plugin-commonjs": "^23.0.2",
  	"@rollup/plugin-json": "^5.0.1",
  	"@rollup/plugin-node-resolve": "^15.0.1"
  };
  var pkgInfo = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	directories: directories,
  	scripts: scripts,
  	author: author,
  	license: license,
  	devDependencies: devDependencies
  };

  var hello = function hello() {
    console.log('抖森');
    console.log(pkgInfo);
  };
  hello();

}));
