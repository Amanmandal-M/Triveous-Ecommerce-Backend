const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

// Get all categories
categoryRouter.get('/', categoryController.allCategories);

// Get category by Id
categoryRouter.get('/:categoryId', categoryController.getCategoryByCategoryId);

// Create a new category
categoryRouter.post('/', categoryController.createCategory);

// Update category by Id
categoryRouter.put('/:categoryId', categoryController.updateCategory);

// Delete category by Id
categoryRouter.delete('/:categoryId', categoryController.deleteCategory);

module.exports = categoryRouter;