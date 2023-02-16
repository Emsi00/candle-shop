import "bootstrap/dist/css/bootstrap.min.css";
import { Person } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const MyAccountIcon = (props) => {
  const navigate = useNavigate();
  const goToAccountSetup = () => {
    navigate("/settings");
  };
  return (
    <div
      type="button"
      className="btn btn-outline-dark d-flex flex-row align-items-center justify-content-around"
      style={{ border: "0px" }}
      onClick={goToAccountSetup}
    >
      <Person width="50px" height="50px" />
      Moje konto
    </div>
  );
};

export default MyAccountIcon;
