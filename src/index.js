const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const cors = require('cors')
const util = require('util')
const setting = require('./setting')
const router = require('./controller')

const app = express()

app.use(cors()) // CORS
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressValidator()) // validator
app.use(helmet()) // secure Express apps

// response
app.use(responseMiddleware({
	isUseLog: true,
	logUrl: `${setting.url.proxy}/log/action`,
	extra: {
		app: 'handapp-api',
		created_type: 2
	}
}))

// router
app.use(router)

// const { promisify } = require('util')
const { connect } = require('./helper/redis')


exports.authSaveUser = async function(user) {
	user.token = aes.encode(`${user.id},${md5(user.id + user.password)}`, defaultKey)

	const setAsync = promisify(global.redisClient.set).bind(global.redisClient)
	await setAsync(`account:${user.id}`, JSON.stringify(user))
	return user
}

// redis connection
connect().then(() => {
	// start listening app
	app.listen(setting.appport)
	util.log(setting.appname + ' runnng port:' + setting.appport)
}).catch((err) => {
	console.log('redis connect err, ' + err)
})