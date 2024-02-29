import "./App.css";
import AppBarResMenu from "./components/AppBarResMenu";
import CampaignBar from "./components/CampaignBar";
import Footer from "./components/Footer";
import FooterEmailSignUp from "./components/FooterEmailSignUp";
import HeaderComponent from "./components/HeaderComponent";
// import HeaderVideo from "./components/HeaderVideo";
import { BrowserRouter } from "react-router-dom";
import Router from "./routing/router";
import Axios from "axios";
import { useState, useEffect } from "react";
import shoppingCartFunctions from "./utils/shoppingCartFunctions.js";

function App() {
  shoppingCartFunctions.initializeCart();

  const [data, setData] = useState(null);
  const [women, setWomen] = useState(null);
  const [men, setMen] = useState(null);
  const [kids, setChildren] = useState(null);

  const getData = async () => {
    try {
      const response = await Axios.get("/api/getproducts");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getWomen = async () => {
    try {
      const response = await Axios.get("/api/getproducts/women");
      setWomen(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getWomen();
  }, []);

  const getMen = async () => {
    try {
      const response = await Axios.get("/api/getproducts/men");
      setMen(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getMen();
  }, []);

  const getChildren = async () => {
    try {
      const response = await Axios.get("/api/getproducts/children");
      setChildren(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getChildren();
  }, []);

  return (
    <div className="app">
      <AppBarResMenu />
      {/* <HeaderVideo /> */}
      <HeaderComponent />
      <CampaignBar />
      <div className="container">
        <BrowserRouter>
          <Router data={data} women={women} kids={kids} men={men} />
        </BrowserRouter>
      </div>
      <FooterEmailSignUp />
      <Footer />
    </div>
  );
}

export default App;
