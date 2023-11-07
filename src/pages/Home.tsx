import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import imgUrl from '../assets/6.png';

import './Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <div className='home-title'>
        <Typography variant='h6'>"¡Sabores naturales, energía sin límites!"</Typography >
          <Link to='/catalogo'>
            <Typography variant='h6'>Catalogo</Typography >
            <img src={imgUrl} className='home-image' alt="LON"/>
          </Link>
      </div>
    </div>
  );
};

export default Home;
