const express = require('express');
const productRouter = express.Router();

const productController = require('../controllers/productController');

// Get all products
productRouter.get('/', productController.getAllProducts);

// Get product details by product ID
productRouter.get('/:productId', productController.getProductDetails);

// Get product by category Id
productRouter.get('/:categoryId', productController.getProductsByCategory);

// Add a new product
productRouter.post('/', productController.addProduct);

// Update product by product ID
productRouter.put('/:productId', productController.updateProduct);

// Delete product by product ID
productRouter.delete('/:productId', productController.deleteProduct);

module.exports = productRouter;