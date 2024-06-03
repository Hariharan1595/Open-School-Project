import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/photo3.jpeg";
import "./Navbar.css";
import mobile_menu from "../assets/images/menu-icon.png";
import close_icon from "../assets/images/close-icon.jpeg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
          {mobileMenu ? (
            <img
              src={close_icon}
              alt="close icon"
              className="menu"
              onClick={toggleMobileMenu}
            />
          ) : (
            <img
              src={mobile_menu}
              alt="menu icon"
              className="menu"
              onClick={toggleMobileMenu}
            />
          )}
        </div>
        <ul id="ani" className={mobileMenu ? "mobile-view" : "navbar-links"}>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/academics">ACADEMICS</Link>
          </li>
          <li>
            <Link to="/admissions">ADMISSION</Link>
          </li>
          <li>
            <Link to="/student-life">STUDENT LIFE</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </nav>
      <div className="message-box">
        <p className="message">
          ADMISSIONS ARE OPEN{" "}
          <span className="blue-text">
            <Link to="/">CLICK HERE</Link>
          </span>{" "}
          TO KNOW ABOUT IT
        </p>
      </div>
    </>
  );
};

export default Navbar;
