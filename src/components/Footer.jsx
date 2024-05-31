import React from 'react'
import "./Footer.css"
import { footerLinks } from '../data';
import FootLink from './FootLink';


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
                <img />
              </div>
              <p className="mail">hello@littlelearners.com</p>
            </div>
            <div className="detail">
              <div className="icon-box">
                <img />
              </div>
              <p className="mail">+91 91812323209</p>
            </div>
          </div>
        </div>
        <img
          src="./assets/images/Ellipse 1.png"
          className="foot-logo"
          width={123}
          height={110}
        ></img>
        <div className="footer-links">
          {footerLinks.map((cell, index) => (
            <FootLink title={cell.title} links={cell.links} key={index} />
          ))}
        </div>
      </div>
      <hr className='hr'/>
      <div className="terms-condition">
        <a href='/'>Teams & services | Privacy policy | Cookie policy</a>
        <div className="social-media">
          <div className="icon-box">
            <img />
          </div>
          <div className="icon-box">
            <img />
          </div>
          <div className="icon-box">
            <img />
          </div>
        </div>
      </div>
      <hr className='hr'/>
      <div className="copywrite">
        Copyright 2024 | Open School Learners Academy | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer
