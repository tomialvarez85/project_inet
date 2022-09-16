import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Maps from "./components/maps/Maps";
import Exhibitions from "./components/exhibitions/Exhibitions";
import VisitsMain from "./components/visits/VisitsMain";
import AboutUs from "./components/about-us/AboutUs";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css"

function App() {

  return (

      <>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/Maps" element= {<Maps />} />
            <Route path="/Exhibitions" element= {<Exhibitions />} />
            <Route path="/Guided-Visits" element= {<VisitsMain />} />
            <Route path="/About-Us" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </>
    
    );
  
  }

export default App;
