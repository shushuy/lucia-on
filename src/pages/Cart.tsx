import { Button, Card, CardActions, CardContent, CardMedia, InputAdornment, TextField, Typography } from '@mui/material';
import { useCartContext } from '../context/CartContext';
import './Cart.css'
import { Link } from 'react-router-dom';
import CardIcon from '@mui/icons-material/CreditCard';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import AddressForm from '../components/AddressForm';
const CartView = () => {
  const initialState = {    
    number: '',
    date: '',
    cvv: ''
  };
  const [cc, setCC] = useState({...initialState})

  const { cartItems, removeFromCart, clearCart } = useCartContext();
  const total: number = (cartItems.reduce((total, item) => total + item.price * item.quantity, 0))
  const iva = total *.16
  const descuento = total > 1000 ? total*.03 : 0;

  const handleOnClick = () => {
    clearCart()
    setCC({...initialState})
    alert('Gracias por su compra');
  }


  return (
    <div className='cart-container'>
      <div>
        <div >
          <Typography variant='h4'>Cart</Typography>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <div className='cart-card'>
                <TextField
                  label="Card Number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CardIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setCC({ ...cc, number: e.target.value })}
                />

                <TextField
                  label="Expiration Date"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DateRangeIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setCC({ ...cc, date: e.target.value })}
                />

                <TextField
                  label="CVV"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setCC({ ...cc, cvv: e.target.value })}
                />
              </div>
              <div>
                <AddressForm />
              </div>
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
            <Typography gutterBottom variant="h6" component="div">{`Pre-total: $${parseFloat(`${total}`).toFixed(2)}`}</Typography>
            <Typography gutterBottom variant="h6" component="div">{`Descuento: $${parseFloat(`${descuento}`).toFixed(2)}`}</Typography>
            <Typography gutterBottom variant="h6" component="div">{`IVA: $${parseFloat(`${iva}`).toFixed(2)}`}</Typography>
            <Typography gutterBottom variant="h5" component="div">{`Total: $${parseFloat(`${total + iva - descuento}`).toFixed(2)}`}</Typography>
            <button disabled={!(cc.cvv && cc.date && cc.number) } onClick={handleOnClick}>PAGAR</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartView;
