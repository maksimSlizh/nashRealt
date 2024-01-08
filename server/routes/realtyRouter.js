const Router = require('express');
const router = new Router();
const realtyController = require('../controllers/realtyController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), realtyController.create);
router.get('/', realtyController.getAll);
router.get('/:id', realtyController.getOne);
router.delete('/:id', checkRole('ADMIN'), realtyController.deleteOne);

module.exports = router;
