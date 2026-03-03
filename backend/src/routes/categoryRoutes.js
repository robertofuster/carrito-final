const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

const validateCategory = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio')
    .isLength({ min: 3 })
    .withMessage('El nombre debe tener al menos 3 caracteres'),

  body('description')
    .optional()
    .isLength({ max: 200 })
    .withMessage('La descripción no puede superar 200 caracteres')
];

router.post('/', validateCategory, categoryController.createCategory);
router.get('/', categoryController.getCategories);

module.exports = router;