/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { PlusSquareFill, DashSquareFill } from "react-bootstrap-icons";
import { addProduct, substractProduct } from "../Redux/Slices/CartSlice";
const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ShopCartDiv = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const UpperDivShopCart = styled.div`
  width: 80%;
  height: 70%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;
const LowerDivShopCart = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const SingleProductInUpperDiv = styled.div`
  width: 90%;
  height: 80px;
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;
const ShopCart = ({ onClick, children }) => {
  const products = useSelector((state) => state.cart.products);

  const logMyCart = (event) => {
    event.stopPropagation();
    console.log(products);
  };

  const dispatch = useDispatch();

  return (
    <BackDrop>
      <ShopCartDiv>
        <UpperDivShopCart>
          {products.map((element, index) => {
            return (
              <SingleProductInUpperDiv id={element.id}>
                <div
                  style={{
                    width: "80px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "80px", height: "80px" }}
                    src={require(`../Pages/Images/${element.adrUrl}`)}
                  ></img>
                </div>
                <div className="d-flex justify-content-center align-items-center w-75">
                  <a style={{ marginLeft: "5px", fontSize: "25px" }}>
                    {element.name}
                  </a>{" "}
                  <a style={{ marginLeft: "5px", fontSize: "25px" }}>
                    x{element.amount}
                  </a>
                </div>
                <div>
                  <PlusSquareFill
                    width="100%"
                    height="40%"
                    style={{ marginTop: "5%", marginBottom: "5%" }}
                    type="button"
                    onClick={() => {
                      dispatch(addProduct(element));
                    }}
                  />
                  <DashSquareFill
                    width="100%"
                    height="40%"
                    style={{ marginBottom: "5%" }}
                    type="button"
                    onClick={() => {
                      dispatch(substractProduct(element));
                    }}
                  />
                </div>
              </SingleProductInUpperDiv>
            );
          })}
        </UpperDivShopCart>
        <LowerDivShopCart>
          {" "}
          <Button
            className="p-3"
            style={{ borderRadius: "20px" }}
            onClick={onClick}
          >
            Zamknij
          </Button>
          <Button
            className="p-3"
            style={{ borderRadius: "20px" }}
            onClick={logMyCart}
          >
            Kupuje
          </Button>
        </LowerDivShopCart>
      </ShopCartDiv>
    </BackDrop>
  );
};

export default ShopCart;
