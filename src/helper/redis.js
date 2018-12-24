const redis = require("redis")
const setting = require('../setting')

// redis-cli -h 127.0.0.1 -p 3001 -a 'ak89w3M483)#4db(root)'
exports.connect = function(conf = {}) {
	conf = Object.assign(setting.redis, conf)

	const client = redis.createClient(conf.port, conf.host)
	global.redisClient = client

	return new Promise((resolve, reject) => {
		client.auth(conf.password)
		client.on('error', (err) => {
			reject(err)
		})

		client.on('ready', () => {
			resolve(client)
		})
	})
}


