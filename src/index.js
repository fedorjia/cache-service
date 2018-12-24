const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const { responseMiddleware, setupExceptionMiddlewares } = require('node-response-middleware')
const cors = require('cors')
const util = require('util')
const setting = require('./setting')
const router = require('./controller')
const { connect } = require('./helper/redis')

const app = express()

app.use(cors()) // CORS
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressValidator()) // validator
app.use(helmet()) // secure Express apps

// response
app.use(responseMiddleware())

// router
app.use(router)

// setup exception handler middleware
setupExceptionMiddlewares(app)

// redis connection
connect().then(() => {
	// start listening app
	app.listen(setting.appport)
	util.log(setting.appname + ' runnng port:' + setting.appport)
}).catch((err) => {
	console.log('redis connect err, ' + err)
})