/**
 * Created by HUI on 20/06/2017.
 */

/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const api = require('./api')

router.use('/api', api.routes(), api.allowedMethods())

module.exports = router
