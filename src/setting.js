// const isDev = process.env.NODE_ENV === 'development'

const setting = {
    appname: 'cache-service',
    appport: 4501,
	// redis-cli -h 127.0.0.1 -p 3501 -a 'ak89w3M483)#4db(root)'
	redis: {
		host: '127.0.0.1',
		port: 3501,
		password: 'ak89w3M483)#4db(root)'
	}
}

module.exports = setting