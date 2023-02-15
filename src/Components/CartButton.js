import { Button } from "react-bootstrap";
import { Bag, Cart, Square } from "react-bootstrap-icons";
const CartButton = ({ children, onClick }) => {
  return (
    <div
      className="fixed-bottom sticky"
      style={{ marginLeft: "5px", marginBottom: "5px" }}
    >
      <Button className="d-flex align-items-center" onClick={onClick}>
        <Bag height="16px" width="16px" className="fa-10x m-1" />
        Twój koszyk
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "25px",
            height: "25px",
            border: "1px solid white",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
        >
          {children ? children : 0}
        </div>
      </Button>
    </div>
  );
};
export default CartButton;
