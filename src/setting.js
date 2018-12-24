// const isDev = process.env.NODE_ENV === 'development'

const setting = {
    appname: 'cache-service',
    appport: 4001,
	// redis-cli -h 127.0.0.1 -p 3001 -a 'ak89w3M483)#4db(root)'
	redis: {
		host: '127.0.0.1',
		port: 9502, // 3001
		password: 'ak89w3M483)#4db(root)',
		expire: 7200, // 2 hours
	}
}

module.exports = setting