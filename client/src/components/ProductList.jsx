import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  
import { fetchProducts, fetchProductsByCategory } from '../apis/product'; // ✅ Import both functions

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();  // Get category from route params

  useEffect(() => {
    const loadProducts = async () => {
      try {
        let data;
        if (category) {
          // ✅ Corrected function call
          data = await fetchProductsByCategory(category);  // Use the right function
        } else {
          data = await fetchProducts();
        }
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, [category]);  // Re-run whenever the category changes

  return (
    <div>
      <h2>{category ? `${category} Products` : "All Products"}</h2>
      <div className="product-list">
        {products.length ? (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
