/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import store from "../Redux/store";
import { PlusSquareFill } from "react-bootstrap-icons";
import { addProduct } from "../Redux/Slices/CartSlice";
import styled from "styled-components";
import { useState } from "react";
const MyCard = styled.div`width:350px;height:300px;background-color:white;display:flex;flex-direction:row; align-items-center`;
const SoyCandles = () => {
  const products = useSelector((state) => state.candles.candles);
  const dispatch = useDispatch();

  return (
    <div
      className="d-flex flex-row align-items-center flex-wrap"
      style={{ marginBottom: "40px" }}
    >
      {products.map((element, index) => {
        return (
          <>
            <div
              style={{
                width: "400px",
                height: "400px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={index}
            >
              <img
                className="card-img-top p-3"
                key={index}
                src={require(`../../src/Pages/Images/${element.adrUrl}`)}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
              <h3>{element.name}</h3>
              <label
                className="d-flex align-items-center justify-content-center"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  fontSize: "15px",
                  width: "60%",
                }}
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
          </>
        );
      })}
    </div>
  );
};

export default SoyCandles;
