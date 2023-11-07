import React from 'react';
import MediaCard from '../components/MediaCard';
import { products } from '../products';

function ProductList() {
  return (
    <div className='grid-container'>
      {products.map((product) => (
        <div key={product.id}>
          <MediaCard {...product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
