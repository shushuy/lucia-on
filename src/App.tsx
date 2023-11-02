// App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './router/Navigator';

import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
