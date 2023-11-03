// App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './router/Navigator';
import CartContextProvider from './context/CartContext';


const App: React.FC = () => {
  return (
    <CartContextProvider>
      <div>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </CartContextProvider>
  );
};

export default App;
