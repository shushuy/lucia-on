import React from 'react';
import Home from '../pages/Home';
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../pages/ProductDetails';
import CartView from '../pages/Cart';
import CSM from '../pages/CSM';
import RelacionesPublicas from '../pages/RelacionesPublicas';
import Catalog from '../pages/Catalog';

const Navigator: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/csm" element={<CSM />} />
        <Route path="/rp" element={<RelacionesPublicas />} />
        <Route path="/catalogo" element={<Catalog />} />
    </Routes>
  );
};

export default Navigator;
