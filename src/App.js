import { Routes, Route, useLocation } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import Welcome from "./components/Welcome"
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ProjectsPage from "./components/ProjectsPage";
import CodeProject from "./components/CodeProject";
import CreativePage from "./components/CreativePage";
import Footer from "./components/Footer";

function App() {
 const [loading, setLoading] =  useState(false);
 const location = useLocation();
 const isCreative = location.pathname === "/creative";

 useEffect (() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2500)
 }, [])

 useEffect(() => {
  const pageBackground = isCreative ? "#000000" : "#F0F6F6";

  document.documentElement.style.backgroundColor = pageBackground;
  document.body.style.backgroundColor = pageBackground;
 }, [isCreative])

 useEffect(() => {
  const pageTitles = {
   "/": "Sam Ito | Portfolio",
   "/projects": "Sam Ito | Projects",
   "/code-projects": "Sam Ito | Code Projects",
   "/creative": "Sam Ito | Creative Work",
   "/resume": "Sam Ito | Resume",
   "/contact": "Sam Ito | Contact",
  };

  document.title = pageTitles[location.pathname] || "Sam Ito | Portfolio";
 }, [location.pathname])

  return (
    <div className={`App min-h-screen ${isCreative ? "bg-black" : "bg-[#F0F6F6]"}`}>
      {
        loading ?
        <Welcome/>
        :
        <div>      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/code-projects" element={<CodeProject />} />
        <Route path="/creative" element={<CreativePage />} />
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
