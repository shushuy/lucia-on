import React from 'react';
import Home from '../pages/Home';
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../pages/ProductDetails';

const Navigator: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
  );
};

export default Navigator;
