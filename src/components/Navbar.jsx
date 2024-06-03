
import { Link } from "react-router-dom";
import logo from "../assets/images/photo3.jpeg";

import mobile_menu from "../assets/images/menu-icon.png";
import close_icon from "../assets/images/close-icon.jpeg";
import React, { useState, useRef } from "react";
import "../pages/Form.css"; //
import "./Navbar.css";

const Navbar = () => {

   const [formData, setFormData] = useState({
     firstName: "",
     lastName: "",
     age: "",
     gender: "",
     grade: "",
     PhoneNumber: "",
     emailId: "",
     address: "",
   });

   const [showForm, setShowForm] = useState(false);
   const formRef = useRef(null);

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     // You can add your logic here to handle form submission
     console.log(formData);
     setShowForm(false);
   };

   const toggleForm = () => {
     setShowForm(!showForm);
   };

   const handleClickOutside = (e) => {
     if (formRef.current && !formRef.current.contains(e.target)) {
       setShowForm(false);
     }
   };



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
          <span onClick={toggleForm} className="blue-text">
            CLICK HERE
          </span>{" "}
          TO KNOW ABOUT IT
        </p>
      </div>

      {showForm && (
        <div className="form-overlay" onClick={handleClickOutside}>
          <div className="form-container" ref={formRef}>
            <h2>Admission Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Grade:</label>
                <input
                  type="text"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email Id:</label>
                <input
                  type="text"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
