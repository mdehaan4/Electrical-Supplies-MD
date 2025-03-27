import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../apis/product'; // Assuming you have this API call function

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);      // Track error state
  const { productId } = useParams(); // Get productId from route params

  useEffect(() => {
    // Fetch product details by productId
    const loadProduct = async () => {
      setLoading(true);  // Set loading state to true when fetching starts
      setError(null);    // Reset error state
      try {
        const data = await fetchProduct(productId);
        setProduct(data);
      } catch (error) {
        setError('Error fetching product details. Please try again later.');
      } finally {
        setLoading(false);  // Set loading to false once the fetch is complete
      }
    };

    loadProduct();
  }, [productId]); // Re-run when the productId changes

  if (loading) return <p>Loading...</p>; // Show loading state
  if (error) return <p>{error}</p>; // Show error message if fetch fails

  if (!product) return <p>Product not found</p>; // If product doesn't exist

  return (
    <div>
      <h2>{product.name}</h2>
      {product.image && <img src={product.image} alt={product.name} width="300" />}  {/* Product image (if available) */}
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetails;
