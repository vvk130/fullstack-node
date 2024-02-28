import ProductsComp from "../components/Products";
import { useParams } from "react-router-dom";

const Brands = ({ title, description, products }) => {
  const { brand: brandName } = useParams();

  return (
    <>
      <h1>{brandName}</h1>
      <ProductsComp
        title={title}
        description={description}
        products={products}
      />
    </>
  );
};

export default Brands;
