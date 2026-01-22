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
import OneFood from "./Pages/Product/OneFood";
import TwoFood from "./Pages/Product/TwoFood";
import ThreeFood from "./Pages/Product/Threefood";
import Four from "./Pages/Product/FourFood";
import FiveFood from "./Pages/Product/FiveFood";
import SixFood from "./Pages/Product/SixFood";
import SevenFood from "./Pages/Product/SevenFood";
import VegetableFriedRice from "./Pages/Product/VegetableFriedRice";
import ChickenBiriyani from "./Pages/Product/ChickenBiriyani";
import FishCurryMeal from "./Pages/Product/FishCurryMeal";
import VegetableKottu from "./Pages/Product/Vegetable Kottu";



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

      
        <Route path="/onefood" element={<OneFood />} />
        <Route path="/twofood" element={<TwoFood />} />
        <Route path="/threefood" element={<ThreeFood />} />
        <Route path="/fourfood" element={<Four />} />
        <Route path="/fivefood" element={<FiveFood />} />
        <Route path="/sixfood" element={<SixFood />} />
        <Route path="/Sevenfood" element={<SevenFood />} />
        <Route path="/vegetablefriedrice" element={<VegetableFriedRice />} />
        <Route path="/chickenbiriyani" element={<ChickenBiriyani />} />
        <Route path="/fishcurrymeal" element={<FishCurryMeal />} />
        <Route path="/vegetablekottu" element={<VegetableKottu />} />






      </Routes>
    </Router>
  );
}

export default App;
