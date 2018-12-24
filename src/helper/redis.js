const redis = require("redis")

// redis-cli -h 127.0.0.1 -p 3001 -a 'ak89w3M483)#4db(root)'
const defaults = {
	host: '127.0.0.1',
	port: 3001,
	password: 'ak89w3M483)#4db(root)',
	expire: 7200, // 2 hours
}

// const conf = require('../setting').redis
// const client = redis.createClient(conf.port, conf.host, conf.opts)

exports.connect = function(conf = {}) {
	conf = Object.assign(defaults, conf)

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


