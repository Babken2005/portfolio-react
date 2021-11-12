import React from "react";
import './App.css';
import {
  Route, Routes
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Say_hi from "./Pages/Say-hi";
import Works from "./Pages/Works";

function App() {
  return (
      <div className="content">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/say-hi' element={<Say_hi/>} />
      <Route path='/works' element={<Works />}/>
      </Routes>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
