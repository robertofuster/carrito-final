const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const productController = require('../controllers/productController');
const adminMiddleware = require('../middlewares/adminMiddleware');
const upload = require('../middlewares/uploadMiddleware');

const validateProduct = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio'),

  body('price')
    .isFloat({ min: 0 })
    .withMessage('Precio inválido'),

  body('category')
    .notEmpty()
    .withMessage('La categoría es obligatoria')
];

router.post('/', adminMiddleware, upload.single('image'), validateProduct, productController.createProduct);
router.get('/', productController.getProducts);

module.exports = router;
