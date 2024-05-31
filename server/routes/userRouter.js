const Router = require('express')
const router = new Router()
const userController = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')
const handleCookie = require('../middleware/handleCookie')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', handleCookie, authMiddleware, userController.check)

module.exports = router
