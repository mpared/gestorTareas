const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get('/', controller.obtenerTareas);
router.post('/', controller.crearTarea);
router.put('/:id', controller.actualizarTarea);
router.delete('/:id', controller.eliminarTarea);

module.exports = router;
