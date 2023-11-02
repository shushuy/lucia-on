// CartContext.tsx
import React, { createContext, useContext, useReducer } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartAction =
  | { type: 'ADD_TO_CART'; product: CartItem }
  | { type: 'REMOVE_FROM_CART'; productId: number };

type CartState = CartItem[];

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Implement the logic to add a product to the cart
      // You can use state.concat(action.product) or create a copy of the cart with the new product
      return state;
    case 'REMOVE_FROM_CART':
      // Implement the logic to remove a product from the cart
      return state;
    default:
      return state;
  }
};

interface CartProps {
  children: React.ReactNode;
}


export const CartProvider: React.FC<CartProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
