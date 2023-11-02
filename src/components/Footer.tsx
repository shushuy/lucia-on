// Footer.tsx
import React from 'react';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <Typography variant="body2" align="center">
      © {new Date().getFullYear()} Lucia's Organic Nuts
    </Typography>
  );
};

export default Footer;
