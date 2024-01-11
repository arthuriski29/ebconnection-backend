const router = require('express').Router()
const authMiddleware = require('../middlewares/auth.middleware')


router.get('/', (request, response) => {
	return response.json({
		success: true,
		message: 'Backend is running well'
	})
})

router.use('/login', authMiddleware, require('./auth.router'))
// router.use('/CreateTicket', require('./auth.router'))
// router.use('/CreateWorkOrder', require('./auth.router'))
// router.use('/SendNotification', require('./auth.router'))

router.use('*', (request, response) => {
	return response.status(404).json({
		success: false,
		message: 'Resource not found'
	})
})

module.exports = router