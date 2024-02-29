import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import "./css/Cart.css";
import showDiscountedPrice from "../utils/showDiscountedPrice";
import shoppingCartFunctions from "../utils/shoppingCartFunctions.js";
import { useEffect, useState } from "react";

function CartItem({ product, count }) {
  const [cartCount, setCartCount] = useState(count);

  useEffect(() => {
    const localStorageCount = shoppingCartFunctions.getCartItemAmount(product);
    setCartCount(localStorageCount);
  }, [product, count]);

  const handleAdd = () => {
    setCartCount(cartCount + 1);
    shoppingCartFunctions.addToCart(product);
  };

  const handleRemove = () => {
    setCartCount(cartCount - 1);
    shoppingCartFunctions.removeOneFromCart(product);
  };

  const handleRemoveCompletely = () => {
    setCartCount(0);
    shoppingCartFunctions.removeCompletelyFromCart(product);
  };

  return (
    <>
      {cartCount > 0 && (
        <>
          <div className="cart-item-container">
            <div className="cart-item-img-container">
              <img
                className="cart-img"
                src={`https://trend-flare.onrender.com/assets/${product.image_url}`}
                alt={product.name}
              />
            </div>
            <div className="cart-item-details">
              <Typography gutterBottom variant="h6" component="div">
                {product.sku}{" "}
                <a href={`/products/${product.id}`}>{product.name}</a>
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                <Button
                  onClick={handleRemove}
                  disabled={cartCount <= 0}
                  style={{
                    backgroundColor: cartCount <= 0 ? "grey" : "black",
                    color: "white",
                    marginRight: "1rem",
                  }}
                >
                  -
                </Button>
                {cartCount}
                <Button
                  onClick={handleAdd}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "1rem",
                  }}
                >
                  +
                </Button>
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color={product.discount ? "red" : "inherit"}
              >
                {product.discount
                  ? showDiscountedPrice(product.price, product.discount)
                  : `${product.price}€`}
              </Typography>
              <div className="cart-item-delete">
                <IconButton onClick={handleRemoveCompletely}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <hr className="hrdashed" />
        </>
      )}
    </>
  );
}

export default CartItem;
