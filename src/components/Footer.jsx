import React from "react";
import "./Footer.css";
import { footerLinks } from "../data";
import FootLink from "./FootLink";
import logo from "../assets/images/Ellipse 1.png";
import mail from "../assets/images/mail.png";
import mobile from "../assets/images/Icon.png";
import twitter from "../assets/images/twitter.png";
import linkedin from "../assets/images/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer1">
        <div className="footer-details">
          <h1 className="footer-title">OPEN SCHOOL</h1>
          <p className="footer-para">
            We believe in the power of play to foster creativity,<br></br>
            problem-solving skills, and imagination.
          </p>
          <div className="contact-details">
            <div className="detail">
              <div className="icon-box">
                <img src={mail} alt="mail" />
              </div>
              <p className="mail">hello@littlelearners.com</p>
            </div>
            <div className="detail">
              <div className="icon-box">
                <img src={mobile} alt="mobile-no" />
              </div>
              <p className="mail">+91 91812323209</p>
            </div>
          </div>
        </div>
        <img src={logo} className="foot-logo" width={123} height={110}></img>
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
            <img src={twitter} alt="twitter" />
          </div>
          <div className="icon-box">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="icon-box">
            <img src={twitter} alt="twitter" />
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
