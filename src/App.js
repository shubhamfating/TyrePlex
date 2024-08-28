import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HemkuntTyres from "./components/hemkunttyres/HemkuntTyres";
import MRFTyre from "./components/MRF/MRFTyre";
import LoginSignupForm from "./components/LoginSignupForm";
import './styles/main.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HemkuntTyres />} />
            <Route path="/mrf" element={<MRFTyre />} />
            <Route path="/login" element={<LoginSignupForm/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
