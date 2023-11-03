import React, { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
  id: number;
  quantity: number;
  price: number;
  title: string,
  description: string,
  url: string
}

interface CartStateInterface {
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  addItemToCart: (item: CartItem) => void;
}

const initialState: CartStateInterface = {
  cartItems: [],
  removeFromCart: (id: number) => {},
  clearCart: () => {},
  addItemToCart: (item: CartItem) => {}
};

export const CartContext = createContext<CartStateInterface>(initialState);

interface CartContextProviderProps {
  children?: ReactNode;
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({ children }) => {
 
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addItemToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  }

  const contextValue: CartStateInterface = {
    cartItems,
    removeFromCart,
    clearCart,
    addItemToCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
export default CartContextProvider;
