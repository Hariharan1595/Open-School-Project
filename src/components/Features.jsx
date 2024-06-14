import React from "react";
import "./Features.css";
import Learn_1 from "../assets/images/DSC_4945.jpeg";
import Learn_2 from "../assets/images/board2.jpeg";
import Learn_3 from "../assets/images/workshop.jpeg";
import Learn_4 from "../assets/images/DSC_5195.jpeg";
import Learn_5 from "../assets/images/DSC_5601.jpeg";
import Learn_6 from "../assets/images/DSC_5086.jpeg";

import placeholder from "../assets/images/placeholder-image.png";
import ImageWithPlaceholder from "./ImageWithPlaceholder";


const Features = () => {
  return (
    <div className="features">
      <div className="features-text">
        <h2>Our Features</h2>
        <h3>What Students Learn</h3>
        <p>
          At Little Learners Academy, we strive to cultivate a love for learning
          and equip children with essential skills for their future success. Our
          academic programs cover a wide range of subjects, allowing students to
          develop a strong foundation and discover their interests. Some key
          areas of learning include
        </p>
      </div>
      <div className="features-img">
        <div className="features-card">
          <span className="shape"></span>
          <ImageWithPlaceholder
            src={Learn_1}
            placeholder={placeholder}
            alt=""
            className=""
          />

          <h4>Language Arts</h4>
          <p>Reading, writing, storytelling, and communication skills.</p>
        </div>
        <div className="features-card">
          <ImageWithPlaceholder
            src={Learn_2}
            placeholder={placeholder}
            alt=""
            className=""
          />
          <h4>Mathematics</h4>
          <p>Number sense, basic operations, problem-solving, and logic.</p>
        </div>
        <div className="features-card">
          <ImageWithPlaceholder
            src={Learn_3}
            placeholder={placeholder}
            alt=""
            className=""
          />
          <h4>workshops</h4>
          <p>
            Exploring the natural world through hands-on experiments and
            investigations.
          </p>
        </div>
        <div className="features-card">
          <ImageWithPlaceholder
            src={Learn_4}
            placeholder={placeholder}
            alt=""
            className=""
          />
          <h4>Social Studies</h4>
          <p>
            Cultivating an understanding of diverse cultures and communities.
          </p>
        </div>
        <div className="features-card">
          <ImageWithPlaceholder
            src={Learn_5}
            placeholder={placeholder}
            alt=""
            className=""
          />
          <h4>Arts and Crafts</h4>
          <p>Encouraging creativity through various art forms and crafts.</p>
        </div>
        <div className="features-card">
          <ImageWithPlaceholder
            src={Learn_6}
            placeholder={placeholder}
            alt=""
            className=""
          />
          <h4>Physical Education</h4>
          <p>Promoting physical fitness, coordination, and teamwork.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
