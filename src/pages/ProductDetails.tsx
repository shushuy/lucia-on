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


  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItemToCart({...productDetails, quantity, price: parseInt(productDetails.price, 10)}  as CartItem);
  };

    useEffect(() => {
    const product = products.find(p => p.id?.toString() === productId);
    if (product?.id !== undefined) {
      setProductDetails(product as any);
    }
    setTimeout(() => {
      setLoading(false);
    }, 300);
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
        <label htmlFor="quantity">Cantidad:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <button onClick={handleAddToCart}>Agregar</button>
      </div>
    </div>
  );
};

export default ProductDetail;
