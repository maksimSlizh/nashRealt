const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')


router.use('/user', userRouter)
router.use('/news', newsRouter)

module.exports = router
