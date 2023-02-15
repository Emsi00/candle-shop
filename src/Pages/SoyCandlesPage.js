/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../Redux/store";
import { PlusSquareFill } from "react-bootstrap-icons";
import { addProduct } from "../Redux/Slices/CartSlice";
import styled from "styled-components";
const MyCard = styled.div`width:350px;height:300px;background-color:white;display:flex;flex-direction:row; align-items-center`;
const SoyCandles = () => {
  const products = useSelector((state) => state.candles.candles);
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column align-items-center">
      {products.map((element, index) => {
        return (
          <div className="card mt-4 d-flex align-items-center m-5 flex-wrap">
            <img
              className="card-img-top p-3"
              key={index}
              src={require(`../../src/Pages/Images/${element.adrUrl}`)}
            />
            <h3>{element.name}</h3>
            <label
              className="d-flex align-items-center justify-content-center"
              style={{ marginLeft: "5px", marginRight: "5px" }}
            >
              {element.description}
            </label>
            <Button
              className="m-3 w-50 d-flex justify-content-around align-items-center"
              onClick={() => {
                dispatch(addProduct(element));
              }}
            >
              <PlusSquareFill width="16px" height="16px" />
              <a style={{ fontSize: "15px" }}>Dodaj do koszyka</a>
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default SoyCandles;
