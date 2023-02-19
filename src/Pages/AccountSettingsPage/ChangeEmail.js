import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
const ChangeEmail = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const sendMail = () => {
    setIsSent(!isSent);
  };
  const setInputEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Zmiana e-maila</h1>
      {isSent ? (
        <div className="d-flex flex-column align-items-center">
          <h4>Podaj kod wysłany na adres email</h4>
          <input style={{ marginTop: "25px" }} />
          <Button style={{ marginTop: "25px" }}>Potwierdź</Button>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <h4>Nowy email</h4>
          <input onChange={setInputEmail} style={{ marginBottom: "10px" }} />
          <Button onClick={sendMail} style={{ marginBottom: "10px" }}>
            Zmień
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChangeEmail;
