const http = require('http')
const express = require('express')
const app = express()
require('dotenv').config()
const { notFoundHandler, errorHandler, wrapErrors } = require('./src/middlewares/ErrorHandler')
const mainRouter = require('./src/components/MainRouter')
const helment = require('helmet')
const compression = require('compression')
const morgan = require('morgan')
const { db } = require('./src/config/db')

db()

app.use(helment())
app.use(compression())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('', mainRouter)
app.use(notFoundHandler)
app.use(wrapErrors)
app.use(errorHandler)

const server = http.createServer(app)
server.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`)
})