const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsControllers')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), newsController.create)
router.get('/', newsController.getAll)
router.get('/:id', newsController.getOne)
router.delete('/:id', checkRole('ADMIN'), newsController.deleteOne)

module.exports = router
