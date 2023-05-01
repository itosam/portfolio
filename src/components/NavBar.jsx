import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed  z-50 ml-[10%] pt-10 pb-[25px] w-5/6 h-[40px] flex justify-between items-center p-0 bg-[#F0F6F6] text-xl text-black border-b-2 border-[#CCCCCC] font-DMSans">
      <div>
        <Link to="/" smooth={true} duration={500}>
          mr.samito.com
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {/* <li>
          <a
            href="https://medium.com/@mr.samito"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </li> */}
        <li>
          <Link to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
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
            : "absolute top-0 left-0 w-full mx-0 h-screen bg-[#F0F6F6] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="/" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          {" "}
          <a href="https://medium.com/@mr.samito">Blog</a>
        </li> */}
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="resume" smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
