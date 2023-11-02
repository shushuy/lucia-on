// ProductDetail.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  // const history = useHistory();
  const { dispatch } = useCart();

  // Replace this with your product data
  const product = {
    id: parseInt(productId || "", 10), // Parse the productId to a number
    name: 'Product Name',
    description: 'Product Description',
    cost: 20, // Replace with the actual cost
  };

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    // dispatch({ type: 'ADD_TO_CART', product: { ...product, quantity } });

    // Clear the quantity input
    setQuantity(1);

    // Navigate back to the previous page (e.g., Home)
    // history.goBack();
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Cost: ${product.cost}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
