/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SingleCandle from "../Components/SingleCandle";

const MyCard = styled.div`width:350px;height:300px;background-color:white;display:flex;flex-direction:row; align-items-center`;

const SoyCandles = () => {
  const products = useSelector((state) => state.candles.candles);
  return (
    <>
      <div
        className="d-flex flex-row justify-content-start align-content-center flex-wrap"
        style={{ marginBottom: "40px" }}
      >
        {products.map((element, index) => {
          return (
            <SingleCandle
              element={element}
              key={index}
              adrUrl={element.adrUrl}
              name={element.name}
              description={element.description}
              price={element.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default SoyCandles;
