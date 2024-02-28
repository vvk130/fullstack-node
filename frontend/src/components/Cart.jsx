import CartItem from "./CartItem";
import "./css/Cart.css";

function ShoppingCart() {
  const itemsInCart = 1;
  const total = 32;

  return (
    <>
      <p></p>
      <hr className="hrdashed" />
      <CartItem />
      <CartItem />
      <p>Items in Cart: {itemsInCart}</p>
      <p>Total sum: {total}€</p>
    </>
  );
}

export default ShoppingCart;
