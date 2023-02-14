import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../Redux/store";
import ProductCart from "./Components/SoyCandleComponents/ProductCart";

const SoyCandles = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div>
      {products.map((element) => {
        return <ProductCart />;
      })}
    </div>
  );
};

export default SoyCandles;
