// Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoUrl from '../assets/logo.png';
import nameUrl from '../assets/name.png';

const Header: React.FC = () => {
  return (
    <AppBar position="static" >
      <Toolbar className='header-1'>
        <div className='header-container'>
          <Link to='/'>
            <img src={logoUrl} className='header-logo'/>
          </Link>
            <img src={nameUrl} className='header-name'/>
          <Link to='/cart'>
            <ShoppingCartIcon />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
