/* eslint-disable jsx-a11y/alt-text */
import "./Home.css";
import "./Images/banner.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import CartButton from "../Components/CartButton";
import { useSelector } from "react-redux";
import ShopCart from "../Components/ShopCart";
import { useState } from "react";
import FacebookIcon from "../Components/FacebookIcon";
import InstagramIcon from "../Components/InstagramIcon";
import TelephoneIcon from "../Components/TelephoneIcon";
import MyCartButton from "../Components/MyCartButton";
import MyAccountIcon from "../Components/MyAccountIcon";
import WebTitle from "../Components/WebTitle";
import Line from "../Components/Line";
import { useMediaQuery } from "@mui/material";
const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const [isCart, setIsCart] = useState(false);
  const productsQuantity = useSelector((state) => {
    if (state.cart.products.length !== 0) {
      let shopCartAmount = 0;
      state.cart.products.map((element) => (shopCartAmount += element.amount));
      return shopCartAmount;
    }
    return 0;
  });
  const isLogged = useSelector((state) => state.login.isLogin);
  const MenuOptions = [
    { to: "aboutus", text: "O NAS" },
    { to: "soycandles", text: "ŚWIECE SOJOWE" },
    { to: "sets", text: "ZESTAWY" },
    { to: "promotions", text: "PROMOCJE" },
  ];
  const showShopCart = () => {
    setIsCart(!isCart);
  };
  return (
    <>
      {isCart && <ShopCart onClick={showShopCart} />}
      <div className="d-flex flex-column homePage">
        {!isLogged && (
          <div
            className={`d-flex ${
              !matches ? "flex-column" : "flex-row"
            } justify-content-center align-items-center`}
          >
            <Link to="/login">Zaloguj się</Link>. Nie masz konta?{"   "}
            <Link to="/register"> Zarejestruj się.</Link>
          </div>
        )}
        <div
          className={`d-flex justify-content-around p-2 ${
            !matches ? "flex-column" : "flex-row"
          } align-items-center`}
          style={{ top: "0", left: "0" }}
        >
          {!matches ? (
            <>
              <div style={{ width: "300px" }}>
                <img src={require("../Pages/Images/banner.jpg")} width="100%" />
              </div>
              <Line orientation={true} />
            </>
          ) : (
            <>
              <div className="w-25">
                <img src={require("../Pages/Images/banner.jpg")} width="100%" />
              </div>
              <Line orientation={true} />
            </>
          )}
          <WebTitle />
          <Line orientation={matches ? true : false} />
          <MyAccountIcon />
          <MyCartButton
            onClick={showShopCart}
            productsQuantity={productsQuantity}
          />
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ marginBottom: "15px" }}
        >
          <hr className="mt-1 mb-2" style={{ width: "100%" }}></hr>
        </div>
        <div
          className={`d-flex justify-content-around ${
            matches ? "flex-row" : "flex-column"
          } align-items-center`}
        >
          {MenuOptions.map((element, index) => {
            return (
              <NavLink
                to={element.to}
                className={({ isActive }) => {
                  return isActive ? "active" : "inActive";
                }}
                key={index}
                end
              >
                <p className="menuChoice">{element.text}</p>
              </NavLink>
            );
          })}
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "0px" }}
        >
          <hr style={{ width: "100%", height: "10px" }}></hr>
        </div>
        <CartButton onClick={showShopCart}>{productsQuantity}</CartButton>
        <FacebookIcon />
        <InstagramIcon />
        <TelephoneIcon />
        <Outlet />
      </div>
    </>
  );
};

export default Home;
