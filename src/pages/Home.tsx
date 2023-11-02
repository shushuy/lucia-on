// Home.tsx
import React from 'react';

const Home: React.FC = () => {
  // Add your list of products here
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    // Add more products...
  ];

  return (
    <div>
      <h1>Home</h1>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          {/* Add an "Add to Cart" button here */}
        </div>
      ))}
    </div>
  );
};

export default Home;
