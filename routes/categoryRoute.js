const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

// Get all categories
categoryRouter.get('/', categoryController.allCategories);


module.exports = categoryRouter;