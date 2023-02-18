import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import "./style.css";
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
  width: 200px;
  min-width: 100px;
  height: 60px;
  font-weight: 400;
  color: black;
  &:hover {
    font-weight: 700;
  }
`;

const AccountOptions = [
  { to: "personaldata", element: <Person />, text: "Dane osobowe" },
  { to: "changepassword", element: <Hash />, text: "Zmiana hasła" },
  { to: "changeemail", element: <Envelope />, text: "Zmiana adresu email" },
  { to: "orderhistory", element: <Hourglass />, text: "Historia zamówień" },
  { to: "accountinfo", element: <InfoCircle />, text: "Informacje o koncie" },
];

const AccountSettings = () => {
  return (
    <div className="d-flex flex-column ">
      <div className="d-flex flex-row justify-content-center">
        {AccountOptions.map((element, index) => {
          return (
            <SettingsOption type="button" key={index}>
              <NavLink
                to={element.to}
                className={({ isActive }) => {
                  return isActive
                    ? "navlink activeNavLink"
                    : "navlink notActiveNavLink";
                }}
              >
                {element.text}
              </NavLink>
            </SettingsOption>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default AccountSettings;
