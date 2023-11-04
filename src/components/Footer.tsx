// Footer.tsx
import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className='footer-container'>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Lucia's Organic Nuts
      </Typography>
      <Link to='/csm'>
        <Typography variant="body2" align="center">Servicio Al Cliente</Typography>
      </Link>
      <Link to='/rp'>
        <Typography variant="body2" align="center">Relaciones Publicas</Typography>
      </Link>
    </div>
  );
};

export default Footer;
