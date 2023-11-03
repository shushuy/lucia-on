import { useCartContext } from '../context/CartContext';

const CartView = () => {
  const { cartItems, removeFromCart, clearCart } = useCartContext();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span>{item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div>
          <p>Total: {cartItems.reduce((total, item) => total + item.price, 0)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartView;
