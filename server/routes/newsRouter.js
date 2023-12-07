const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsControllers')

router.post('/', newsController.create)
router.get('/', newsController.getAll)
router.get('/:id', newsController.getOne)

module.exports = router
