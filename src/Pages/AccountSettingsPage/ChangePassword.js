import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useReducer } from "react";
import { changePassword } from "../../Redux/Slices/LoginSlice";
import { useSelector, useDispatch } from "react-redux";
const reducer = (state, action) => {
  if (action.type === "oldPassword") {
    return {
      newPasswordFirst: state.newPasswordFirst,
      newPasswordSecond: state.newPasswordSecond,
      oldPassword: action.oldPassword,
    };
  }
  if (action.type === "newPasswordFirst") {
    return {
      newPasswordFirst: action.newPasswordFirst,
      newPasswordSecond: state.newPasswordSecond,
      oldPassword: state.oldPassword,
    };
  }
  if (action.type === "newPasswordSecond") {
    return {
      newPasswordFirst: state.newPasswordFirst,
      newPasswordSecond: action.newPasswordSecond,
      oldPassword: state.oldPassword,
    };
  }
};
const ChangePassword = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login.loginData);
  const [loginData, setLoginData] = useReducer(reducer, data);
  return (
    <div className="d-flex align-items-center flex-column">
      <h1>Zmiana hasła</h1>
      <h4>Stare hasło</h4>
      <input
        onChange={(event) => {
          setLoginData({
            type: "oldPassword",
            oldPassword: event.target.value,
          });
        }}
      />
      <h4>Nowe hasło</h4>
      <input
        onChange={(event) => {
          setLoginData({
            type: "newPasswordFirst",
            newPasswordFirst: event.target.value,
          });
        }}
      />
      <h4>Powtórz hasło</h4>
      <input
        onChange={(event) => {
          setLoginData({
            type: "newPasswordSecond",
            newPasswordSecond: event.target.value,
          });
        }}
      />
      <Button
        style={{ marginTop: "10px" }}
        onClick={() => {
          console.log(loginData);
          dispatch(changePassword(loginData));
        }}
      >
        Zmień hasło
      </Button>
    </div>
  );
};

export default ChangePassword;
