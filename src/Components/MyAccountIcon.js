import "bootstrap/dist/css/bootstrap.min.css";
import { Person } from "react-bootstrap-icons";

const MyAccountIcon = (props) => {
  return (
    <div
      type="button"
      className="btn btn-outline-dark d-flex flex-row align-items-center justify-content-around"
      style={{ border: "0px" }}
      onClick={props.onClick}
    >
      <Person width="50px" height="50px" />
      Moje konto
    </div>
  );
};

export default MyAccountIcon;
