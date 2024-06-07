import React from "react";
import bannerImage from "../assets/images/banner image.jpg";
import "./Home.css";
import Container from "../assets/images/Container.png";
import Card1 from "../components/Card1";
import { serviceData } from "../data";
import students from "../assets/images/students2.JPG";
import board from "../assets/images/board2.JPG";

import club_icon_1 from "../assets/images/Icon Container-1.png";
import club_icon_2 from "../assets/images/Icon Container-2.png";
import club_icon_3 from "../assets/images/Icon Container-3.png";
import club_icon_4 from "../assets/images/Icon Container-4.png";
import club_icon_5 from "../assets/images/Icon Container-5.png";
import club_icon_6 from "../assets/images/Icon Container-6.png";
import club_icon_7 from "../assets/images/Icon Container-7.png";
import club_icon_8 from "../assets/images/Icon Container-8.png";
import club_icon_9 from "../assets/images/Icon Container-9.png";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">
        Where young minds blossom and{" "}
        <span className="blue-text">Dreams Take Flight</span>
      </h1>
      <div className="banner-image">
        <img src={bannerImage} />
      </div>

      <div className="subsection">
        <div className="box">Children Deserve Bright Future</div>
        <div className="title">Our Benefits</div>
        <div className="para1">
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </div>
      </div>
      <div className="clubs">
        <div className="club-card">
          <img src={club_icon_1} alt="" className="club-icon" />
          <h4>Play-Based Learning</h4>
          <p>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
        </div>
        <div className="club-card">
          <img src={club_icon_2} alt="" className="club-icon" />
          <h4>Individualized Attention</h4>
          <p>
            Our small class sizes enable personalized attention, catering to
            each child's unique needs.
          </p>
        </div>
        <div className="club-card">
          <img src={club_icon_3} alt="" className="club-icon" />
          <h4>Parent Involvement</h4>
          <p>
            We foster a strong parent-school partnership to ensure seamless
            communication and collaboration.
          </p>
        </div>
        <div className="club-card">
          <img src={club_icon_4} alt="" className="club-icon" />
          <h4>Alumni Achievements</h4>
          <p>
            Our small class sizes enable personalized attention, catering to
            each child's unique needs.
          </p>
        </div>
        <div className="club-card">
          <img src={club_icon_5} alt="" className="club-icon" />
          <h4>Science Club</h4>
          <p>
            The science club allows young scientists to explore the wonders of
            science through fun experiments and hands-on learning.
          </p>
        </div>
        <div className="club-card">
          <img src={club_icon_6} alt="" className="club-icon" />
          <h4>Cooking and Culinary Arts</h4>
          <p>
            Cooking classes introduce students to the joys of preparing and
            tasting delicious and healthy meals.
          </p>
        </div>
      </div>
      <div className="subsection">
        <div className="box">Services</div>
        <div className="title">Our Services</div>
      </div>
      <div className="service-section">
        <Card1
          title={serviceData[0].title}
          image={board}
          content={serviceData[0].content}
        />
        <Card1
          title={serviceData[1].title}
          image={students}
          content={serviceData[1].content}
        />
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
    </div>
  );
};

export default Home;
