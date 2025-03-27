const createError = require('http-errors');
const ProductModel = require('../models/product');
const db = require('../db');
const ProductModelInstance = new ProductModel();

module.exports = class ProductService {

  // List products, optionally filtering by category or other query parameters
  async list(options = {}) {
    try {
      const { category } = options;  // Get category from options (query params)
      let statement = `SELECT * FROM products`;
      let values = [];

      // Debugging: Log category being passed
      console.log("Category Filter:", category); // Add a log to check category

      // If category is provided, filter products by category
      if (category) {
        statement += ` WHERE category = $1`;  // Add filtering condition for category
        values.push(category);  // Add category value to the query params
      }

      const result = await db.query(statement, values);  // Execute the query
      return result.rows;  // Return the products found in the database

    } catch (err) {
      console.error("Error in fetching products:", err);  // Add error log for debugging
      throw err;  // Throw an error if something goes wrong
    }
  }

  // Retrieve a product by its ID
  async get(id) {
    try {
      // Check if product exists by ID
      const product = await ProductModelInstance.findOne(id);

      // If no product found, reject with an error
      if (!product) {
        throw createError(404, 'Product not found');
      }

      return product;  // Return the product found in the database

    } catch (err) {
      console.error("Error in fetching product by ID:", err); // Log error for debugging
      throw err;  // Throw an error if something goes wrong
    }
  }

  };

