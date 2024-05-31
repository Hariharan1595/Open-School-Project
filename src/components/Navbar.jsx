import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Ellipse 1.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </div>
        <ul className="navbar-links">
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
