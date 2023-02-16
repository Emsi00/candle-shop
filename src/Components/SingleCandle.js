/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { addProduct } from "../Redux/Slices/CartSlice";
import { PlusSquareFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
const SingleCandle = (props) => {
  const dispatch = useDispatch();
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
        key={props.index}
      >
        <img
          className="card-img-top p-3"
          key={props.index}
          src={require(`../../src/Pages/Images/${props.adrUrl}`)}
          style={{
            width: "200px",
            height: "200px",
          }}
        />
        <h3>{props.name}</h3>
        <label
          className="d-flex align-items-center justify-content-center"
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            fontSize: "15px",
            width: "60%",
          }}
        >
          {props.description}
        </label>
        <label style={{ margin: "5px" }}>${props.price}</label>
        <Button
          className="m-3 w-50 d-flex justify-content-around align-items-center"
          onClick={() => {
            dispatch(addProduct(props.element));
          }}
        >
          <PlusSquareFill width="16px" height="16px" />
          <a style={{ fontSize: "15px" }}>Dodaj do koszyka</a>
        </Button>
      </div>
    </>
  );
};

export default SingleCandle;
