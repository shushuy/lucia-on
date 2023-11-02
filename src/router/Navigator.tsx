// Routes.tsx
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../pages/ProductDetails';
// Import other page components

const Navigator: React.FC = () => {
  return (
    <Routes>
        <Route path="//" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />

        {/* Add routes for other pages here */}
    </Routes>
  );
};

export default Navigator;
