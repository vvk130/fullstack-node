import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import shoppingCartFunctions from "../utils/shoppingCartFunctions.js";

const SimpleDialog = ({ message, buttonStyle, product }) => {
  const [open, setOpen] = useState(false);
  const handleAddShoppingCart = () => {
    setOpen(!open);
    if (open) {
      shoppingCartFunctions.addToCart(product);
    }
  };

  return (
    <>
      <Button
        onClick={handleAddShoppingCart}
        className="linkreadmore"
        variant="outlined"
        style={buttonStyle}
      >
        <AddShoppingCartIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleAddShoppingCart}
        style={{ padding: "1.5rem" }}
      >
        <DialogTitle>{message}</DialogTitle>
      </Dialog>
    </>
  );
};

export default SimpleDialog;
