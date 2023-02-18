import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Promotions from "../Pages/Promotions";
import Sets from "../Pages/Sets";
import SoyCandles from "../Pages/SoyCandlesPage";
import AccountSettings from "../Pages/AccountSettingsPage/AccountSettings";
import LoginPage from "../Pages/LoginFolder/LoginPage";
import RegisterPage from "../Pages/LoginFolder/RegisterPage";
import PersonalData from "../Pages/AccountSettingsPage/PersonalData";
import ChangePassword from "../Pages/AccountSettingsPage/ChangePassword";
import ChangeEmail from "../Pages/AccountSettingsPage/ChangeEmail";
import OrderHistory from "../Pages/AccountSettingsPage/OrderHistory";
import AccountInfo from "../Pages/AccountSettingsPage/AccountInfo";
const MainNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="settings" element={<AccountSettings />}>
            <Route path="personaldata" element={<PersonalData />}></Route>
            <Route path="changepassword" element={<ChangePassword />}></Route>
            <Route path="changeemail" element={<ChangeEmail />}></Route>
            <Route path="orderhistory" element={<OrderHistory />}></Route>
            <Route path="accountinfo" element={<AccountInfo />}></Route>
          </Route>
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="soycandles" element={<SoyCandles />} />
          <Route path="sets" element={<Sets />} />
          <Route path="promotions" element={<Promotions />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};

export default MainNavigation;
