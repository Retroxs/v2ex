/**
 * Created by HUI on 20/06/2017.
 */
const Koa = require('koa');
const path = require('path');
const convert = require('koa-convert')
// const Router = require('koa-router')()
const koaStatic = require('koa-static')

const config = require('./config.js');

const app = new Koa();

app.use(convert(koaStatic(
  path.join(__dirname, './dist')
)));

app.listen(config.port, () => {
  console.log(`Koa is listening in ${config.port}`);
});
