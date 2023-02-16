import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/Home.css";
import { NavLink } from "react-bootstrap";
const MenuButton = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => {
        return isActive ? "active" : "inActive";
      }}
    >
      <p className="menuChoice">{props.children}</p>
    </NavLink>
  );
};
export default MenuButton;
