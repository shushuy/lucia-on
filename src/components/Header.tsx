// Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Header.css';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <div className='header-container'>
          <Typography variant="h6">Lucia's Organic Nuts</Typography>
          <Link to='/cart'>
            <Typography variant='h5'>Cart</Typography>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
