import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const SimpleDialog = ({ message, buttonStyle }) => {
  const [open, setOpen] = useState(false);

  const handleOpenAndClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button
        onClick={handleOpenAndClose}
        className="linkreadmore"
        variant="outlined"
        style={buttonStyle}
      >
        <AddShoppingCartIcon />
      </Button>
      <Dialog open={open} onClose={handleOpenAndClose}>
        <DialogTitle>{message}</DialogTitle>
      </Dialog>
    </>
  );
};

export default SimpleDialog;
