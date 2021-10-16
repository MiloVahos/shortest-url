const express = require('express')

const mainRouter = express()

mainRouter.use('/', require('./encoder/EncoderRouter'))

module.exports = mainRouter