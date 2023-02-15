import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BackDrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
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
const UpperDiv = styled.div`
  width: 80%;
  height: 70%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LowerDiv = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const ShopCart = ({ onClick, children }) => {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const logMyCart = (event) => {
    event.stopPropagation();
    console.log(products);
  };
  return (
    <BackDrop>
      <ShopCartDiv>
        <UpperDiv>
          {products.map((element) => {
            return (
              <div>
                {element.name} x{element.amount}
              </div>
            );
          })}
        </UpperDiv>
        <LowerDiv>
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
        </LowerDiv>
      </ShopCartDiv>
    </BackDrop>
  );
};

export default ShopCart;
