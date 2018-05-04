'use strict'

const Koa = require('koa');
var router = require('./router');

const app = new Koa();
app.use(router['routes']());

var port = 8008;
app.listen(port || 8008);
console.log('mockjs is running at port: ' + port);