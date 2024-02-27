import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const SimpleDialog = ({ message }) => {
  const [open, setOpen] = useState(false);

  const handleOpenAndClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button
      onClick={handleOpenAndClose}
      className='linkreadmore'
      variant="outlined"
      style={{ borderColor: '#2274A5', color: '#2274A5', width: '50%' }}
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
