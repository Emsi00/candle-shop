import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import {
  Person,
  Hash,
  Envelope,
  Hourglass,
  InfoCircle,
} from "react-bootstrap-icons";
const SettingsOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  height: 50px;
  font-weight: 400;
  &:hover {
    font-weight: 700;
    // color: blue;
  }
`;

const AccountSettings = () => {
  return (
    <>
      <div className="d-flex flex-column w-25 " style={{ marginTop: "200px" }}>
        <SettingsOption type="button">
          Dane osobowe
          <Person width="20px" height="20px" style={{ marginLeft: "10px" }} />
        </SettingsOption>
        <SettingsOption type="button">
          Zmiana hasła
          <Hash width="20px" height="20px" style={{ marginLeft: "10px" }} />
        </SettingsOption>
        <SettingsOption type="button">
          Zmiana adresu email
          <Envelope width="20px" height="20px" style={{ marginLeft: "10px" }} />
        </SettingsOption>
        <SettingsOption type="button">
          Historia zamówień
          <Hourglass
            width="20px"
            height="20px"
            style={{ marginLeft: "10px" }}
          />
        </SettingsOption>
        <SettingsOption type="button">
          Informacje o koncie
          <InfoCircle
            width="20px"
            height="20px"
            style={{ marginLeft: "10px" }}
          />
        </SettingsOption>
      </div>
    </>
  );
};

export default AccountSettings;
