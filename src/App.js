import { Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import Welcome from "./components/Welcome"
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
 const [loading, setLoading] =  useState(false);
 useEffect (() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2500)
 }, [])

  return (
    <div className="App bg-#F0F6F6">
      {
        loading ?
        <Welcome/>
        :
        <div>      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>

      }
    </div>
  );
}

export default App;
