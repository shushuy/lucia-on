import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
import { products } from '../products';
import { CardMedia } from '@mui/material';
import './ProductDetails.css';
const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productDetails, setProductDetails] = useState({
    price: '',
    title: '',
    description: '',
    url: ''
  });
  const [loading, setLoading] = useState(true);
  // const { dispatch } = useCart();


  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    // dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity }, price });

    // Clear the quantity input
    setQuantity(1);

    // Navigate back to the previous page (e.g., Home)
    // history.goBack();
  };

    useEffect(() => {
    const product = products.find(p => p.id?.toString() === productId);
    console.log("🚀 ~ file: ProductDetails.tsx:33 ~ useEffect ~ product:", {productId, product})
    if (product?.id !== undefined) {
      setProductDetails(product as any);
    }
    setTimeout(() => {
      setLoading(false);
    }, 750);
  }, [productId]);

    if (loading) {
    return (
      <div className='loading-container'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='product-details-container'>
      <CardMedia
        component={'img'}
        src={productDetails?.url}
        className='product-details-image'
        sx={{ objectFit: 'cover' }}
      />
      <div className='product-details-text-container'>
        <h1>{productDetails?.title}</h1>
        <p>{productDetails?.description}</p>
        <p>${productDetails?.price}</p>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
