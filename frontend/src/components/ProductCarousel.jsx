import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';
import './css/NewArrivals.css';
import ProductCard from './ProductCard'; 

const ProductCarousel = ({ products }) => {
  return (
    <>
      <div style={{ textAlign: 'left' }}>
        <h2>{"Similar products"}</h2>
        <p>{"Check out these styles"}</p>
        <div className="grid">
          {products &&
            products.slice(0, 4).map((product) => (
              <Suspense key={product.id} fallback={<Skeleton variant="rectangular" width={300} height={450} />}>
                <ProductCard
                  productName={product.name}
                  price={product.price}
                  id={product.id}
                  imageUrl={product.image_url}
                  brand={product.brand}
                  discount={product.discount}
                  stock={product.stock}
                  style={{ width: '7em' }}
                />
              </Suspense>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;