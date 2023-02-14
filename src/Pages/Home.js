import "./Home.css";
import "./Images/banner.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { Bag } from "react-bootstrap-icons";
import CartButton from "./Components/SoyCandleComponents/CartButton";
import { useSelector } from "react-redux";

const Home = () => {
  const productsAmount = useSelector((state) => {
    return state.cart.products;
  });

  return (
    <div className="d-flex flex-column homePage">
      <div className="d-flex justify-content-center p-2">
        <h1 className="menuChoice">Soy Candles Shop</h1>
      </div>
      <div className="d-flex justify-content-center">
        <hr className="mt-1 mb-4" style={{ width: "80%", height: "10px" }}></hr>
      </div>
      <div className="d-flex justify-content-around">
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
        <hr className="mt-4 mb-2" style={{ width: "80%", height: "10px" }}></hr>
      </div>
      <CartButton>{productsAmount.length}</CartButton>
      <Outlet />
    </div>
  );
};

export default Home;
