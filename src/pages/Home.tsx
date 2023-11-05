import React from 'react';
import MediaCard from '../components/MediaCard';
import { products } from '../products';
import './Home.css';
import { Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div>
      <div className='home-title'>
        <Typography variant='h6'>"¡Sabores naturales, energía sin límites!"</Typography >
      </div>
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
