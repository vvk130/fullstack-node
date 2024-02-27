import { Suspense } from 'react';
import Skeleton from '@mui/material/Skeleton';
import './css/NewArrivals.css';
import ProductCard from './ProductCard'; 

const Products = ({ title, description, products }) => {
  return (
    <>
      <div style={{ textAlign: 'left' }}>
        <h2>{title || "Products"}</h2>
        <p>{description || "Check out these styles"}</p>
        <div style={{ paddingBottom: '1rem' }}>
          <form method="post" style={{height: '2rem', border:'none'}}>
            <input style={{height: 'inherit', width: '20rem'}} required/>
            <button type="submit" style={{height: 'inherit', marginLeft: '1rem'}}>
              Search
            </button>
          </form>
        </div>
        <div className="grid">
          {products &&
            products.map((product) => (
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

export default Products;
