import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Getstart from "./Pages/Getstart";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import Appetizers from "./Pages/Appetizers";
import MainCourse from "./Pages/MainCourse";
import Desserts from "./Pages/Desserts";
import Beverages from "./Pages/Beverages";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OneFood from "./Pages/Appetizers Product/OneFood"; 
import TwoFood from "./Pages/Appetizers Product/TwoFood";
import ThreeFood from "./Pages/Appetizers Product/Threefood";
import Four from "./Pages/Appetizers Product/FourFood";
import FiveFood from "./Pages/Appetizers Product/FiveFood";
import SixFood from "./Pages/Appetizers Product/SixFood";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Getstart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appetizers" element={<Appetizers />} />
        <Route path="/maincourse" element={<MainCourse />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* OneFood route */}
        <Route path="/onefood" element={<OneFood />} />
        <Route path="/twofood" element={<TwoFood />} />
         <Route path="/threefood" element={<ThreeFood />} />
         <Route path="/fourfood" element={<Four />} />
         <Route path="/fivefood" element={<FiveFood />} />
          <Route path="/sixfood" element={<SixFood />} />

      </Routes>
    </Router>
  );
}

export default App;
