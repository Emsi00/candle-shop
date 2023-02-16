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
import { Person, Bag } from "react-bootstrap-icons";
import MyCartButton from "../Components/MyCartButton";
import MyAccountIcon from "../Components/MyAccountIcon";

const Home = () => {
  const [isCart, setIsCart] = useState(false);
  const productsQuantity = useSelector((state) => {
    if (state.cart.products.length !== 0) {
      let shopCartAmount = 0;
      state.cart.products.map((element) => (shopCartAmount += element.amount));
      return shopCartAmount;
    }
    return 0;
  });
  const MenuOptions = [
    { to: "aboutus", text: "O NAS" },
    { to: "soycandles", text: "SOY CANDLES" },
    { to: "sets", text: "Zestawy" },
    { to: "promotions", text: "PROMOCJE" },
  ];
  const showShopCart = () => {
    setIsCart(!isCart);
  };
  return (
    <>
      {isCart && <ShopCart onClick={showShopCart} />}
      <div className="d-flex flex-column homePage">
        <div
          className="d-flex justify-content-around p-2 align-items-center"
          style={{ top: "0", left: "0" }}
        >
          <div className="w-25">
            <img src={require("../Pages/Images/banner.jpg")} width="100%" />
          </div>
          <div className="vr"></div>
          <div width="40%">
            <div className="d-flex flex-column align-items-center">
              <div>
                <h1>Candle World</h1>
              </div>
              <div className="d-flex justify-content-center">
                <h6 className="text-muted">Soy Candles </h6>
              </div>
            </div>
          </div>
          <div className="vr"></div>
          {/* <div
            type="button"
            className="btn btn-outline-dark d-flex flex-row align-items-center justify-content-around"
            style={{ border: "0px" }}
          >
            <Person width="50px" height="50px" />
            Moje konto
          </div> */}
          <MyAccountIcon />
          <MyCartButton
            onClick={showShopCart}
            productsQuantity={productsQuantity}
          />

          <div></div>
        </div>
        <div className="d-flex justify-content-center">
          <hr className="mt-1 mb-2" style={{ width: "100%" }}></hr>
        </div>
        <div
          className="d-flex justify-content-around align-items-center flex-wrap"
          style={{ height: "30px" }}
        >
          {MenuOptions.map((element) => {
            return (
              <NavLink
                to={element.to}
                className={({ isActive }) => {
                  return isActive ? "active" : "inActive";
                }}
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
