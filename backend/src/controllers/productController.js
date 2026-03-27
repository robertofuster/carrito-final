const Product = require('../models/Product');
const { validationResult } = require('express-validator');

exports.createProduct = async (req, res) => {
  try {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const productData = {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : null
    };

    const product = new Product(productData);
    await product.save();

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {

    const products = await Product.find()
      .populate('category', 'name');

    res.json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {

    const categoryId = req.params.id;

    const products = await Product.find({ category: categoryId })
      .populate('category', 'name');

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.deleteProduct = async (req, res) => {
  try {

    const id = req.params.id;

    await Product.findByIdAndDelete(id);

    res.json({
      message: "Producto eliminado"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};