import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Promotions from "../Pages/Promotions";
import Sets from "../Pages/Sets";
import SoyCandles from "../Pages/SoyCandles";

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
    </Router>
  );
};

export default MainNavigation;
