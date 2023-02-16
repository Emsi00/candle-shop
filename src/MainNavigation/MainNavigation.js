import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Promotions from "../Pages/Promotions";
import Sets from "../Pages/Sets";
import SoyCandles from "../Pages/SoyCandlesPage";

import AccountSettings from "../Pages/AccountSettingsPage/AccountSettings";
const MainNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="soycandles" element={<SoyCandles />} />
          <Route path="sets" element={<Sets />} />
          <Route path="promotions" element={<Promotions />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
};

export default MainNavigation;
