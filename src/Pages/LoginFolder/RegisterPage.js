import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowLeft } from "react-bootstrap-icons";
import { color } from "@mui/system";
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
const RegisterPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const loginInput = () => {};
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
            <h2>Zarejestruj się</h2>
          </LogElement>
          <LogElement>
            <TextField id="outlined-basic" label="e-mail" variant="outlined" />{" "}
          </LogElement>
          {/* <LogElement>
            <TextField id="outlined-basic" label="Login" variant="outlined" />{" "}
          </LogElement> */}
          <LogElement>
            <TextField
              type="password"
              id="outlined-basic"
              label="Hasło"
              variant="outlined"
            />{" "}
          </LogElement>
          <LogElement>
            <TextField
              type="password"
              id="outlined-basic"
              label="Powtórz hasło"
              variant="outlined"
            />{" "}
          </LogElement>
          <LogElement>
            <Button variant="outlined" size="large">
              Zarejestruj
            </Button>
          </LogElement>
          <LogElement>
            Masz konto?
            <Link to="/login">Zaloguj się</Link>
          </LogElement>
        </LoginPanel>
      </CenterLoginPanel>
    </>
  );
};

export default RegisterPage;
