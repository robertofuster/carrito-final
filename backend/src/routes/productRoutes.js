const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const productController = require('../controllers/productController');
const upload = require('../middlewares/uploadMiddleware');
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");


// VALIDACIONES
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


// =========================
// RUTAS
// =========================

// CREAR PRODUCTO (solo admin)
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  validateProduct,
  productController.createProduct
);

// OBTENER PRODUCTOS
router.get("/", productController.getProducts);

// ELIMINAR PRODUCTO (solo admin)
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  productController.deleteProduct
);

// FILTRAR POR CATEGORIA
router.get("/category/:id", productController.getProductsByCategory);


module.exports = router;