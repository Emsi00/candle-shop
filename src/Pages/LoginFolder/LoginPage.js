import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeft } from "react-bootstrap-icons";
import { color } from "@mui/system";
import { loginIn } from "../../Redux/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";

const LogElement = styled.div`
  margin-bottom: 20px;
`;
const LoginPanel = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CenterLoginPanel = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/aboutus");
  };
  const isLogged = useSelector((state) => state.login.isLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  return (
    <>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
          fontWeight: "600",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            fontSize: "25px",
          }}
        >
          <ArrowLeft
            style={{
              width: "50px",
              height: "50px",
              marginRight: "5px",
            }}
          />{" "}
          Strona główna
        </div>
      </Link>
      <CenterLoginPanel>
        <LoginPanel>
          <LogElement>
            <h2>Zaloguj się</h2>
          </LogElement>
          <LogElement>
            <TextField
              id="outlined-basic1"
              label="e-mail"
              variant="outlined"
              onChange={changeEmail}
            />{" "}
          </LogElement>
          <LogElement>
            <TextField
              type="password"
              id="outlined-basic2"
              label="Hasło"
              variant="outlined"
              onChange={changePassword}
            />{" "}
          </LogElement>
          <LogElement>
            <Button
              variant="outlined"
              size="large"
              onClick={() => {
                dispatch(loginIn({ email: email, password: password }));
                setTimeout(() => {
                  if (isLogged) {
                    goToHome();
                  }
                }, 1000);
              }}
            >
              Login
            </Button>
          </LogElement>
          <LogElement>
            Nie masz konta?
            <Link to="/register">Zarejestruj się</Link>
          </LogElement>
        </LoginPanel>
      </CenterLoginPanel>
    </>
  );
};

export default LoginPage;
