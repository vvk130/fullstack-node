import ProductsComp from "../components/Products";

const Products = ({ title, description, products }) => {
  return (
    <>
      <h1>{title}</h1>
      <ProductsComp
        title={title}
        description={description}
        products={products}
      />
    </>
  );
};

export default Products;
