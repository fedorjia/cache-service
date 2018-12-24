const express = require('express')
const router = express.Router({mergeParams: true})
const { promisify } = require('util')
const { body, validationResult } = require('express-validator/check')

/**
 * select database
 */
const selectDb = async (res) => {
	const { app } = res.locals
	const selectAsync = promisify(global.redisClient.select).bind(global.redisClient)
	await selectAsync(app.db)
}

/**
 * get
 */
router.get('/get/:key', async (req, res, next) => {
	try {
		// select db
		await selectDb(res)

		const { key } = req.params
		const getAsync = promisify(global.redisClient.get).bind(global.redisClient)
		let value = await getAsync(key)
		if (!value) {
			return res.success(null)
		}
		return res.success(JSON.parse(value))
	} catch (err) {
		next(err)
	}
})

/**
 * set
 */
router.post('/set', [
	body('key', 'key required').trim().isLength({ min: 1 }),
	body('value', 'value required').trim().isLength({ min: 1 })
], async (req, res, next) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.failure(errors.array()[0].msg)
		}

		// select db
		await selectDb(res)

		const { key, value } = req.body
		const setAsync = promisify(global.redisClient.set).bind(global.redisClient)
		await setAsync(key, JSON.stringify(value))
		return res.success(true)
	} catch (err) {
		next(err)
	}
})

/**
 * remove
 */
router.delete('/remove/:key', async (req, res, next) => {
	try {
		// select db
		await selectDb(res)

		const { key } = req.params
		const delAsync = promisify(global.redisClient.del).bind(global.redisClient)
		await delAsync(key)
		return res.success(true)
	} catch (err) {
		next(err)
	}
})

/**
 * clear
 */
router.post('/clear', async (req, res, next) => {
	try {
		// select db
		await selectDb(res)

		const flushdbAsync = promisify(global.redisClient.flushdb).bind(global.redisClient)
		await flushdbAsync()
		return res.success(true)
	} catch (err) {
		next(err)
	}
})

module.exports = router