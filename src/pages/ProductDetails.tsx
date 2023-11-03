import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { products } from '../products';
import { CardMedia } from '@mui/material';
import './ProductDetails.css';
import { useCartContext, CartItem } from '../context/CartContext';
const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [productDetails, setProductDetails] = useState({
    price: '',
    title: '',
    description: '',
    url: ''
  });
  const [loading, setLoading] = useState(true);
  const { addItemToCart} = useCartContext(); 
  // const { dispatch } = useCart();


  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    // dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity }, price });

    // Clear the quantity input
    addItemToCart({...productDetails, quantity, price: parseInt(productDetails.price, 10)}  as CartItem);
  // id: number;
  // quantity: number;
  // price: number;
  // title: string,
  // description: string,
  // url: string
    // Navigate back to the previous page (e.g., Home)
    // history.goBack();
  };

    useEffect(() => {
    const product = products.find(p => p.id?.toString() === productId);
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
