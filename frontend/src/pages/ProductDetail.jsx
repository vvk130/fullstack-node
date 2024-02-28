import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "../components/css/ProductDetail.css";
import SizeChart from "../components/SizeChart";
import SimpleDialog from "../components/SimpleDialog";
import ProductCarousel from "../components/ProductCarousel";
import showDiscountedPrice from "../utils/showDiscountedPrice";

const ProductDetail = ({ products }) => {
  const { id: productId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await Axios.get(
          `/api/getproducts/${Number(productId)}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [productId]);

  return (
    <>
      {data ? (
        <>
          <p> Products &gt;&gt; {data.name} </p>
          <div className="product-detail-container">
            <div className="product-image-container">
              <img
                src={`../assets/${data.image_url}`}
                alt={data.name}
                className="product-image"
              />
            </div>
            <div className="product-details">
              <p>
                Brand: <a href={`../brands/${data.brand}`}>{data.brand}</a>
              </p>
              <h1>{data.name.toUpperCase()}</h1>
              <Typography color={data.discount ? "red" : "inherit"}>
                {data.discount
                  ? showDiscountedPrice(data.price, data.discount)
                  : `${data.price}€`}
              </Typography>
              <p className="small-text">Shop now, pay next month!</p>
              <p className="small-text">
                Interest-free payment period for up to 12 months,{" "}
                <a href="/payments">read more</a>
              </p>
              <hr className="hrdashed" />
              <SizeChart />
              <SimpleDialog
                buttonStyle={{
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "1rem",
                }}
                message="Added to cart"
              />
              <hr className="hrdashed" />
              <p>{data.color.charAt(0).toUpperCase() + data.color.slice(1)}</p>
              <p>
                <span
                  className="color-circle"
                  style={{ backgroundColor: `${data.color}` }}
                ></span>
              </p>
              <hr className="hrdashed" />
              <p>DESCRIPTION</p>
              <p>{data.description}</p>
              <hr className="hrdashed" />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "LightGray",
              borderRadius: "10px",
              padding: "0.5em",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <ul>
              <li> Free shipping for purchases over 49.95 euros</li>
              <li> Free return with a new purchase</li>
              <li> Smooth (and fast!) deliveries</li>
            </ul>
          </div>
          <ProductCarousel products={products} />
        </>
      ) : (
        <h1>Product not found</h1>
      )}
    </>
  );
};

export default ProductDetail;
