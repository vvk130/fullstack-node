import { Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import './css/Cart.css'; 


function CartItem() {
    const productName = "Nelly Pants";
    const price = 40;
    const discount = 0.20;
    const productSku = 'SK0000eueu';
    const count = 2;
  
    return (
        <>
        <div className="cart-item-container">
        <div className="cart-item-img-container">
        <img className="cart-img" src='https://trend-flare.onrender.com/assets/mens-black-pants.jpg' alt={productName} />
        </div>
        <div className="cart-item-details">
        <Typography gutterBottom variant="h6" component="div">
        {productSku} {productName}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
        <Button style={{backgroundColor: 'black', color: 'white', marginRight: '1rem'}}>-</Button>{count}<Button style={{backgroundColor: 'black', color: 'white', marginLeft: '1rem'}}>+</Button>
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color={discount ? "red" : "inherit"}>
        {discount ? `${(parseFloat(price) * (1 - parseFloat(discount))).toFixed(2)}€ | -${discount*100}% off!` : `${price}€` }
        </Typography>
        <div className="cart-item-delete">
        <DeleteIcon />
        </div>
        </div>
        </div>
        <hr className="hrdashed" />
    </>
);
}

export default CartItem;