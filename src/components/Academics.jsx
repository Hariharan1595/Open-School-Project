import React from "react";
import "./Academics.css";
import profile_1 from '../assets/images/img-1.png'
import profile_2 from '../assets/images/img-2.png'
import profile_3 from '../assets/images/img-3.png'
import profile_4 from '../assets/images/img-4.png'


import photo12 from "../assets/images/photo13.jpeg";

const Academics = () => {
  return (
    <div className="academics">
      <h3>Curriculum Overview</h3>
      <p>
        Our curriculum blends academic excellence with holistic development,
        fostering critical thinking and creativity. It emphasizes core subjects
        while integrating 21st-century skills and real-world experiences.
        Through differentiated instruction and personalized support, we ensure
        every student reaches their full potential. Regular updates reflect best
        practices, preparing students to thrive in a rapidly changing world.
      </p>
      <div className="about-image-div">
        <img src={photo12} alt="trustees" className="about-image" />
      </div>
      <div className="profile">
        <h2>FACULTY PROFILE</h2>
        <div className="profile-img">
          <div className="profile-card">
            <img src={profile_1} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
          </div>
          <div className="profile-card">
            <img src={profile_2} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
          </div>
          <div className="profile-card">
            <img src={profile_3} alt="" />
            <h4>STELLA </h4>
            <span>Read more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
