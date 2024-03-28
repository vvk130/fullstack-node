import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import SignIn from "../pages/SignIn";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import Brands from "../pages/Brands";

const routingData = (data, women, men, kids) => [
  {
    path: "/",
    element: (
      <Products
        title="All products"
        description="New and innovative clothing for everyone"
        products={data}
      />
    ),
    title: "Home",
  },
  {
    path: "/",
    element: (
      <Products
        title="All products"
        description="New and innovative clothing for everyone"
        products={data}
      />
    ),
    title: "Home",
  },
  {
    path: "/cart",
    element: <Cart />,
    title: "cart",
  },
  {
    path: "/Women",
    element: (
      <Products
        title="Women's clothing"
        description="New and innovative clothing for women"
        products={women}
      />
    ),
    title: "Women's clothing",
  },
  {
    path: "/Men",
    element: (
      <Products
        title="Men's clothing"
        description="New and innovative clothing for men"
        products={men}
      />
    ),
    title: "Men's clothing",
  },
  {
    path: "/Children",
    element: (
      <Products
        title="Children's clothing"
        description="New and innovative clothing for children"
        products={kids}
      />
    ),
    title: "Children's clothing",
  },
  {
    path: "/login",
    element: <Login />,
    title: "login",
  },
  {
    path: "/search",
    element: <Search />,
    title: "seach",
  },
  {
    path: "/checkout",
    element: <CheckOut />,
    title: "checkout",
  },
  {
    path: "/signin",
    element: <SignIn />,
    title: "signin",
  },
  {
    path: "/profile",
    element: <Profile />,
    title: "profile",
  },
  {
    path: "/products/:id",
    element: <ProductDetail products={data} />,
    title: "productDetail",
  },
  {
    path: "/brands/:brand",
    element: (
      <Brands
        title="Styles by Brand"
        description="Find clothes from your favorite brand"
        products={data}
      />
    ),
    title: "Styles by brand",
  },
  {
    path: "*",
    element: <NotFound />,
    title: "Not Found",
  },
];

export default routingData;
