import Button from "@mui/material/Button";
import backgroundImage from "../assets/images/mens-white-hoodie-removebg-preview.png";
import "./css/HeaderComponent.css";
import url from "../utils/showDiscountedPrice";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Check out our new hoodie by Shadowflow</h1>
        <Button
          variant="outlined"
          style={{ borderColor: "#2274A5", color: "#2274A5" }}
          href={`${url}/products/16`}
        >
          Read more
        </Button>
      </div>
      <img
        src={backgroundImage}
        alt="New hoodie by Shadowflow"
        className="header-img"
      />
    </div>
  );
};

export default HeaderComponent;
