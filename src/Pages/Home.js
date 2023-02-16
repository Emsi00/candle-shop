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

  const showShopCart = () => {
    setIsCart(!isCart);
  };
  return (
    <>
      {isCart && <ShopCart onClick={showShopCart} />}
      <div className="d-flex flex-column homePage">
        <div
          className="d-flex justify-content-center p-2"
          style={{ top: "0", left: "0" }}
        >
          <img
            src={require("../Pages/Images/banner.jpg")}
            // style={{ width: "100%", height: "300px" }}
          ></img>
        </div>
        <div className="d-flex justify-content-center">
          <hr className="mt-1 mb-2" style={{ width: "100%" }}></hr>
        </div>
        <div
          className="d-flex justify-content-around align-items-center flex-wrap"
          style={{ height: "30px" }}
        >
          <NavLink
            to="aboutus"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
            end
          >
            <p className="menuChoice">O NAS</p>
          </NavLink>
          <NavLink
            to="soycandles"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
          >
            <p className="menuChoice">ŚWIECE SOJOWE</p>
          </NavLink>
          <NavLink
            to="sets"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
          >
            <p className="menuChoice">Kolekcje</p>
          </NavLink>
          <NavLink
            to="promotions"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
          >
            <p className="menuChoice">PROMOCJE</p>
          </NavLink>
          {/* <NavLink
            to="/settings"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
          >
            <p className="menuChoice">Moje konto</p>
          </NavLink> */}
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
