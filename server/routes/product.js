const express = require('express');
const router = express.Router();

const ProductService = require('../services/ProductService');
const ProductServiceInstance = new ProductService();

module.exports = (app) => {
  app.use('/products', router);

  // GET /products (list all products or filtered by query parameters like category)
  router.get('/', async (req, res, next) => {
    try {
      const queryParams = req.query;  // Get query parameters (like category)
      const response = await ProductServiceInstance.list(queryParams);  // Pass the query params to the list method
      res.status(200).send(response);  // Return the list of products
    } catch (err) {
      next(err);  // Handle errors
    }
  });

  // GET /products/:productId (get a specific product by its ID)
  router.get('/:productId', async (req, res, next) => {
    try {
      const { productId } = req.params;  // Extract productId from URL params
      const response = await ProductServiceInstance.get(productId);  // Fetch the product by ID
      res.status(200).send(response);  // Return the product details
    } catch (err) {
      next(err);  // Handle errors
    }
  });

  // GET /products/category/:category (list products filtered by category)
  router.get('/category/:category', async (req, res, next) => {
    try {
      const { category } = req.params;  // Get category from URL params
      const decodedCategory = decodeURIComponent(category);  // Decode the category if needed
      console.log(`Fetching products for category: ${decodedCategory}`);  // Log for debugging
      const response = await ProductServiceInstance.list({ category: decodedCategory });  // Pass decoded category to filter products
      console.log(`Products fetched:`, response);  // Log the products fetched
      res.status(200).send(response);  // Return the filtered list of products
    } catch (err) {
      console.error('Error in /products/category/:category route:', err);  // Log error to console
      next(err);  // Handle errors
    }
  });
  
};
