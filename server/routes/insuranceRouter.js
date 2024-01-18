const Router = require('express')
const router = new Router()
const insuranceController = require('../controllers/insuranceController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), insuranceController.create)
router.get('/', insuranceController.getAll)
router.get('/:id', insuranceController.getOne)
router.delete('/:id', checkRole('ADMIN'), insuranceController.deleteOne)

module.exports = router
