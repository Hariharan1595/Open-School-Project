import React from "react";
import "./Footer.css";
import { footerLinks } from "../data";
import FootLink from "./FootLink";
import logo from "../assets/images/photo3.jpeg";
import mail from "../assets/images/mail.png";
import mobile from "../assets/images/Icon.png";
import insta from "../assets/images/insta-icon.png";
import linkedin from "../assets/images/linkedin.png";
import youtube from "../assets/images/youtube.png"


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer1">
        <div className="footer-details">
          <h1 className="footer-title">AHUM ACADEMY of Open Schooling </h1>
          <p className="footer-para">
            2A Gandhi Road,
            <br />
            Sadanandapuram, <br />
            New Perungalathur, <br />
            Chennai-600063.
          </p>
          <div className="contact-details">
            <div className="detail">
              <div className="icon-box">
                <img src={mail} alt="mail" />
              </div>
              <p className="mail">amalseducation@gmail.com </p>
            </div>
            <div className="detail">
              <div className="icon-box">
                <img src={mobile} alt="mobile-no" />
              </div>
              <p className="mail">+91 9500194219, +91 9787871400</p>
            </div>
          </div>
        </div>
        <img src={logo} className="foot-logo "></img>
        <div className="footer-links">
          {footerLinks.map((cell, index) => (
            <FootLink title={cell.title} links={cell.links} key={index} />
          ))}
        </div>
      </div>
      <hr className="hr" />
      <div className="terms-condition">
        <a href="/">Teams & services | Privacy policy | Cookie policy</a>
        <div className="social-media">
          <div className="icon-box">
            <img src={youtube} alt="twitter" />
          </div>
          <div className="icon-box">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="icon-box">
            <img src={insta} alt="twitter" />
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="copywrite">
        Copyright 2024 | Open School Learners Academy | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
