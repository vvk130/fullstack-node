import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SimpleDialog from './SimpleDialog';
import './css/ProductCard.css';
import { Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ActionAreaCard({productName, id, price, imageUrl, stock, discount, brand}) {
  return (
    <Card className='cardmedia'>
      <CardActionArea>
        <CardMedia
          loading="lazy"
          component="img"
          src={`https://trend-flare.onrender.com/assets/${imageUrl}`}
          alt={productName}
        />
        <CardContent className='cardcontent'>
          <Typography gutterBottom variant="h8" component="div" color= {(stock > 0 && stock < 7) ? "red" : "inherit"}>
          {(stock > 0 && stock < 7) ? "Only few in stock!" : (stock === 0 ? "Out of stock" : `${brand}`)}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {productName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color={discount ? "red" : "inherit"}>
            {discount ? `${(parseFloat(price) * (1 - parseFloat(discount))).toFixed(2)}€ | -${discount*100}% off!` : `${price}€` }
          </Typography>
          <div className='button-container' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 'auto'}}>
          <SimpleDialog message="Added to cart" />
          <Button
            component='a' href={`/products/${id}`}
            className='linkreadmore'
            variant="outlined"
            style={{ borderColor: '#2274A5', color: '#2274A5', width: '50%' }}
          >
            Explore
          </Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
