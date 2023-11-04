import React from 'react';
import Home from '../pages/Home';
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../pages/ProductDetails';
import CartView from '../pages/Cart';
import CSM from '../pages/CSM';

const Navigator: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/csm" element={<CSM />} />
    </Routes>
  );
};

export default Navigator;
