import React from 'react';
import MediaCard from '../components/MediaCard';
import { products } from '../products';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className='grid-container'>
      {products.map((product) => (
        <div key={product.id} >
          <MediaCard {...product} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Home;
