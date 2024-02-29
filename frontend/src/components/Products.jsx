import { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import "./css/NewArrivals.css";
import ProductCard from "./ProductCard";

const Products = ({ title, description, products }) => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h2>{title || "Products"}</h2>
        <p>{description || "Check out these styles"}</p>
        <div style={{ paddingBottom: "1rem" }}></div>
        <div className="grid">
          {products &&
            products.map((product) => (
              <Suspense
                key={product.id}
                fallback={
                  <Skeleton variant="rectangular" width={300} height={450} />
                }
              >
                <ProductCard
                  key={product.id}
                  product={product}
                  style={{ width: "7em" }}
                />
              </Suspense>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
