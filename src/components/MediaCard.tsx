import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, } from 'react-router-dom';

export interface MediaCardProps {
  id: number,
  description: string;
  title: string;
  buttonTitle?: string;
  url?: string;
  price: number;
}

export default function MediaCard({
  description,
  title,
  buttonTitle = 'Detalles',
  url = 'https://m.media-amazon.com/images/I/31B3ioiofML._SY300_SX300_QL70_FMwebp_.jpg',
  price,
  id
}: MediaCardProps) {

 
  return (
    <Card sx={{ maxWidth: 345,  margin: 2  }} >
      <Link to={`/product/${id}`}>
        <CardMedia
          sx={{ height: 140, width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}
          title="green iguana"
          component={'img'}
          src={url}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/product/${id}`}>
            <Button size="small">{buttonTitle}</Button>
            <Button size="small">${price}</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
