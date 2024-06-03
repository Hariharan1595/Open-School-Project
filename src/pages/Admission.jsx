import React from "react";
import "./Admission2.css";

import design from "../assets/icons/Abstract Design.png";
import banner from "../assets/images/admission-container.png";
import processImg from "../assets/images/Sub Container.png";

const Admission = () => {
  return (
    <>
      <div className="banner">
        <img src={banner} alt="banner" className="banner-img" />
      </div>

      <div className="admission-container">
        <img src={design} alt="design" className="design" />
        <div className="title-box">
          <div className="box">Admission</div>
          <div className="title">Join Our Family of Young Learners</div>
        </div>
        <div className="para">
          At Little Learners Academy, we welcome you to embark on an exciting
          educational journey for your child. Our admission process is designed
          to be transparent, straightforward, and inclusive. Here's a
          step-by-step guide to joining our school
        </div>
      </div>

      <div className="ad-process">
        <div className="subsection">
          <div className="box">Process</div>
          <div className="title">Admission Process</div>
          <div className="para1">
            Embark on a remarkable educational journey with us! Our Admission
            and Enrollment process is the gateway to providing your child with
            an exceptional learning experience at our kindergarten school
          </div>
        </div>
        <div className="process">
          <img src={processImg} alt="process" className="process-img" />
        </div>
      </div>

      {/* <div className="newsletter">
        <h1 className="box-title">Subscribe to get update</h1>
        <div className="sub-section">
          <p className="section-para">
            30k Students Registered for this,<br></br> Subscribe for more
            information
          </p>
          <input
            type="email"
            className="mail-box"
            placeholder="Enter you email-ID.."
          ></input>
          <button type="button" className="submit-button">
            Submit
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Admission;
