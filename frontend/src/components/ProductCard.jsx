import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import SimpleDialog from "./SimpleDialog";
import "./css/ProductCard.css";
import { Button } from "@mui/material";
import showDiscountedPrice from "../utils/showDiscountedPrice";
import url from "../utils/url";

export default function ActionAreaCard({ product }) {
  return (
    <>
      {product && (
        <Card className="cardmedia">
          <CardActionArea>
            <CardMedia
              loading="lazy"
              component="img"
              src={`${url}/${product.image_url}`}
              alt={product.name}
            />
            <CardContent className="cardcontent">
              <Typography
                gutterBottom
                variant="h8"
                component="div"
                color={
                  product.stock > 0 && product.stock < 7 ? "red" : "inherit"
                }
              >
                {product.stock > 0 && product.stock < 7
                  ? "Only few in stock!"
                  : product.stock === 0
                  ? "Out of stock"
                  : `${product.brand}`}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {product.name}
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
              <div
                className="button-container"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "auto",
                }}
              >
                <SimpleDialog
                  message="Added to cart"
                  buttonStyle={{
                    borderColor: "#2274A5",
                    color: "#2274A5",
                    width: "50%",
                  }}
                  product={product}
                />
                <Button
                  component="a"
                  href={`/products/${product.id}`}
                  className="linkreadmore"
                  variant="outlined"
                  style={{
                    borderColor: "#2274A5",
                    color: "#2274A5",
                    width: "50%",
                  }}
                >
                  Explore
                </Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}
