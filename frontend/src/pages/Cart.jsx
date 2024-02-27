import CartComp from "../components/Cart"

const Cart = () => {
    return (
      <>
        <h1>Your Shopping Cart</h1>
        {/* if Cart empty show "No items in cart" */}
        <CartComp />
      </>
    );
  };
  
  export default Cart;