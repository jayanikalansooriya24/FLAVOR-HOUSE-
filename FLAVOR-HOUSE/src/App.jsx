import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Getstart from "./Pages/Getstart";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import Appetizers from "./Pages/Appetizers";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Getstart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Appetizers" element={<Appetizers />} />
        
      </Routes>
    </Router>
  );
}

export default App;