const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')
const realtyRouter = require('./realtyRouter')


router.use('/user', userRouter)
router.use('/news', newsRouter)
router.use('/realty', realtyRouter)

module.exports = router
