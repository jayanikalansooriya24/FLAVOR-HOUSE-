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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Getstart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Appetizers" element={<Appetizers />} />
        <Route path="/MainCourse" element={<MainCourse />} />
        <Route path="/Desserts" element={<Desserts />} />
        <Route path="/Beverages" element={<Beverages />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />

      
        
      </Routes>
    </Router>
  );
}

export default App;