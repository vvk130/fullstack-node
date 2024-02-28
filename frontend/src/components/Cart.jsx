import CartItem from "./CartItem";
import "./css/Cart.css";

function ShoppingCart() {
  const itemsInCart = 50;
  const shipping = 32;

  return (
    <>
      <p></p>
      <hr className="hrdashed" />
      <CartItem />
      <CartItem />
      <p>Items in Cart: {itemsInCart}</p>
      <p>Shipping cost: {itemsInCart >= 49.95 ? "0" : shipping}</p>
      <span className="small-text">
        Free shipping for deliveries over 49.95€
      </span>
      <hr className="hrdashed" />
      <p>Total sum: {itemsInCart + shipping}€</p>
    </>
  );
}

export default ShoppingCart;
