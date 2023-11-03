// Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className='header-container'>
          <Link to='/'>
          <Typography variant="h6">Lucia's Organic Nuts</Typography>
          </Link>
          <Link to='/cart'>
            <ShoppingCartIcon />
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
