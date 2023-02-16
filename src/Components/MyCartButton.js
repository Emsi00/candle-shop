/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Bag } from "react-bootstrap-icons";

const MyCartButton = (props) => {
  const [isMouseOn, setIsMouseOn] = useState(false);
  const mouseOn = () => {
    setIsMouseOn(true);
  };
  const mouseOff = () => {
    setIsMouseOn(false);
  };
  return (
    <div
      type="button"
      className="btn btn-outline-dark d-flex flex-row align-items-center justify-content-around"
      onClick={props.onClick}
      style={{ border: "0px" }}
      onMouseEnter={mouseOn}
      onMouseLeave={mouseOff}
    >
      <Bag width="50px" height="50px" />
      Mój koszyk
      <span
        className={`badge badge-light ${
          !isMouseOn ? "text-dark" : "text-white"
        } d-flex align-items-center justify-content-center`}
        style={{
          fontSize: "25px",
          width: "30px",
          height: "35px",
          border: "2px solid white",
          marginLeft: "2px",
        }}
      >
        {props.productsQuantity === 0 ? "0" : props.productsQuantity}
      </span>
    </div>
  );
};

export default MyCartButton;
