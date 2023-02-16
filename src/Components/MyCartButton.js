import "bootstrap/dist/css/bootstrap.min.css";
import { Bag } from "react-bootstrap-icons";

const MyCartButton = (props) => {
  return (
    <div
      type="button"
      className="btn btn-outline-dark d-flex flex-row align-items-center justify-content-around"
      onClick={props.onClick}
      style={{ border: "0px" }}
    >
      <Bag width="50px" height="50px" />
      Mój koszyk
      <span
        className="badge badge-light text-muted d-flex align-items-center justify-content-center"
        style={{
          fontSize: "25px",
          width: "30px",
          height: "35px",
          border: "2px solid black",
          marginLeft: "2px",
        }}
      >
        {props.productsQuantity === 0 ? "0" : props.productsQuantity}
      </span>
    </div>
  );
};

export default MyCartButton;
