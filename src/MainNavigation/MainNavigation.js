import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Promotions from "../Pages/Promotions";
import Sets from "../Pages/Sets";
import SoyCandles from "../Pages/SoyCandlesPage";
import AccountSettings from "../Pages/AccountSettingsPage/AccountSettings";
import LoginPage from "../Pages/LoginFolder/LoginPage";
import RegisterPage from "../Pages/LoginFolder/RegisterPage";
const MainNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="settings" element={<AccountSettings />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} /> */}
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="soycandles" element={<SoyCandles />} />
          <Route path="sets" element={<Sets />} />
          <Route path="promotions" element={<Promotions />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/settings" element={<AccountSettings />} />
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
