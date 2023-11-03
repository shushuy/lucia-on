import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useCartContext } from '../context/CartContext';
import './Cart.css'
import { Link } from 'react-router-dom';

const CartView = () => {
  const { cartItems, removeFromCart, clearCart } = useCartContext();
  return (
    <div className='cart-container'>
      <div>
        <div>
          <Typography variant='h4'>Cart</Typography>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cartItems.map((item) => (
                    <Card sx={{ maxWidth: 345,  margin: 2  }} className='cart-item'>
                      <Link to={`/product/${item.id}`}>
                        <CardMedia
                          sx={{ height: 140, width: '140', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
                          component={'img'}
                          src={item.url}
                        />
                      </Link>
                      <div>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                          </Typography>

                        </CardContent>
                        <CardActions className='cart-item-text'>
                              <Button size="small">unidades: {item.quantity}</Button>
                              <Button size="small">${item.price * item.quantity}</Button>
                              <Button onClick={()=>removeFromCart(item.id)}>remover</Button>
                        </CardActions>
                      </div>
                    </Card>
                ))}
              </ul>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className='cart-total-text'>
            <Typography gutterBottom variant="h5" component="div">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</Typography>
            <button onClick={clearCart}>Clear Cart</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartView;
