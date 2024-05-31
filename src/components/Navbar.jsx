import React from 'react'
import logo from '../assets/images/Ellipse 1.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} className="logo" />
          </a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/academics">ACADEMICS</a>
          </li>
          <li>
            <a href="/admissions">ADMISSION</a>
          </li>
          <li>
            <a href="/student-life">STUDENT LIFE</a>
          </li>
          <li>
            <a href="/services">SERVICES</a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <li>
            <a href="contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
      <div className="message-box">
        <p className="message">
          
          ADMISSIONS ARE OPEN{" "}
          <span className="blue-text">
            <a href="/">CLICK HERE</a>
          </span>
          {" "}TO KNOW ABOUT IT
        </p>
      </div>
    </>
  );
}

export default Navbar