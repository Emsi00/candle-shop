/* eslint-disable jsx-a11y/alt-text */
import "./Home.css";
import "./Images/banner.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import CartButton from "../Components/CartButton";
import { useSelector } from "react-redux";
import ShopCart from "../Components/ShopCart";
import { useState } from "react";
const Home = () => {
  const [isCart, setIsCart] = useState(false);
  const productsAmount = useSelector((state) => {
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
        <div className="d-flex justify-content-center p-2">
          <img src={require("../Pages/Images/banner.jpg")} width></img>
        </div>
        <div className="d-flex justify-content-center">
          <hr
            className="mt-1 mb-2"
            style={{ width: "90%", height: "10px" }}
          ></hr>
        </div>
        <div className="d-flex justify-content-around flex-wrap">
          <NavLink
            to="aboutus"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
            end
          >
            <p className="menuChoice">O nas</p>
          </NavLink>
          <NavLink
            to="soycandles"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
          >
            <p className="menuChoice">Świece sojowe</p>
          </NavLink>
          <NavLink
            to="sets"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
          >
            <p className="menuChoice">Zestawy</p>
          </NavLink>
          <NavLink
            to="promotions"
            className={({ isActive }) => {
              return isActive ? "active" : "inActive";
            }}
          >
            <p className="menuChoice">Promocje</p>
          </NavLink>
        </div>
        <div className="d-flex justify-content-center">
          <hr
            className="mt-4 mb-2"
            style={{ width: "90%", height: "10px" }}
          ></hr>
        </div>
        <CartButton onClick={showShopCart}>{productsAmount}</CartButton>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
