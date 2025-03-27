import axios from './client';  // Import the Axios instance

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err.response.data;  // Handle errors
  }
};

// Fetch a single product by ID
export const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`/products/${productId}`);
    return response.data;
  } catch (err) {
    console.error("Error fetching product:", err);
    throw err.response.data;  // Handle errors
  }
};

// Fetch products by category using query parameters
export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`/products?category=${encodeURIComponent(category)}`);  // Using query parameter
    return response.data;
  } catch (err) {
    console.error("Error fetching products by category:", err);
    throw err.response.data;  // Handle errors
  }
};
