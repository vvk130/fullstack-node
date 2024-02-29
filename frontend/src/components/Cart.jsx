import CartItem from "./CartItem";
import "./css/Cart.css";
import shoppingCartFunctions from "../utils/shoppingCartFunctions.js";
// import { useEffect, useState } from "react";
import { Button } from "@mui/material";

function ShoppingCart() {
  const myCart = JSON.parse(localStorage.getItem("cart"));

  return (
    <>
      {myCart && myCart.length > 0 ? (
        <>
          <p></p>
          <hr className="hrdashed" />
          {myCart.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              count={item.amount}
            />
          ))}
          <span className="small-text">
            Free shipping for deliveries over 49.95€
          </span>
          <hr className="hrdashed" />
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              marginBottom: "1rem",
            }}
            onClick={shoppingCartFunctions.emptyShoppingCart}
            component="a"
            href="/checkout"
          >
            Confirm your order
          </Button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
}

export default ShoppingCart;
