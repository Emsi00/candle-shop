import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const AccountSettings = () => {
  return (
    <>
      <div
        className="d-flex justify-content-around align-items-center flex-row"
        style={{ marginTop: "10px" }}
      >
        <Button>Dane osobowe</Button>
        <Button>Zmiana hasła</Button>
        <Button>Zmiana adresu email</Button>
        <Button>Historia zamówień</Button>
        <Button>Informacje o koncie</Button>
      </div>
      <hr width="100%"></hr>
    </>
  );
};

export default AccountSettings;
