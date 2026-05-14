import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { darkHighlightLinkClassName, highlightLinkClassName } from "../sharedClasses";

const AnimatedNavText = ({ text }) => (
  <span aria-label={text} className="inline-block whitespace-nowrap">
    {text.split("").map((letter, index) => (
      <motion.span
        key={`${letter}-${index}`}
        aria-hidden="true"
        className="inline-block"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 500, damping: 14 }}
      >
        {letter}
      </motion.span>
    ))}
  </span>
);

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const location = useLocation();
  const isCreative = location.pathname === '/creative';
  const interactiveLinkClassName = isCreative ? darkHighlightLinkClassName : highlightLinkClassName;

  return (
    <div className={`fixed z-50 ml-[10%] pt-10 pb-[25px] w-5/6 h-[40px] flex justify-between items-center p-0 border-b-2 font-DMSans ${isCreative ? 'bg-black text-white border-slate-600' : 'bg-[#F0F6F6] text-black border-[#CCCCCC]'}`}>
      <div>
        <Link to="/" smooth={true} duration={500}>
          <AnimatedNavText text="mr.samito.com" />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="pl-10">
          <Link to="projects" smooth={true} duration={500} className={interactiveLinkClassName}>
            Projects
          </Link>
        </li>
        <li className="pl-10">
          <Link to="resume" smooth={true} duration={500} className={interactiveLinkClassName}>
            Resume
          </Link>
        </li>
        <li className="pl-10">
          <Link to="contact" smooth={true} duration={500} className={interactiveLinkClassName}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `fixed inset-0 w-screen h-screen flex flex-col justify-center items-center ${isCreative ? 'bg-black' : 'bg-[#F0F6F6]'}`
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/" smooth={true} duration={500} className={interactiveLinkClassName}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500} className={interactiveLinkClassName}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="resume" smooth={true} duration={500} className={interactiveLinkClassName}>
            Resume
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} className={interactiveLinkClassName}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
