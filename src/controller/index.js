const { promisify } = require('util')

exports.authSaveUser = async function(user) {
	user.token = aes.encode(`${user.id},${md5(user.id + user.password)}`, defaultKey)

	const setAsync = promisify(global.redisClient.set).bind(global.redisClient)
	await setAsync(`account:${user.id}`, JSON.stringify(user))
	return user
}