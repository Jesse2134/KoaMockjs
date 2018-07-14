'use strict'

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
var router = require('./router');

const app = new Koa();
app.use(bodyParser());

app.use(router['routes']());


var port = 2135;
app.listen(port || 2135);
console.log('mockjs is running at port: ' + port);