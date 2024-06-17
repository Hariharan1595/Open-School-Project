import React from "react";
import bannerImage from "../assets/images/banner2.jpeg";
import "./Home.css";
import ScrollAnimation from "../components/ScrollAnimation";

import Card1 from "../components/Card1";
import { serviceData } from "../data";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import students from "../assets/images/home-fac-1.jpeg";
import board from "../assets/images/home-ed.jpeg";

import club_icon_1 from "../assets/images/Icon Container-1.png";
import club_icon_2 from "../assets/images/Icon Container-2.png";
import club_icon_3 from "../assets/images/Icon Container-3.png";
import club_icon_4 from "../assets/images/Icon Container-4.png";
import club_icon_5 from "../assets/images/Icon Container-5.png";
import club_icon_6 from "../assets/images/Icon Container-6.png";

import placeholder from "../assets/images/placeholder-image.png";

const Home = () => {
  return (
    <div className="home">
      <h1 className="heading">
        Where young minds blossom{" "}
        <span className="heading-span"> and Dreams Take Flight</span>
      </h1>
      <div className="banner-image">
        <ImageWithPlaceholder
          src={bannerImage}
          placeholder={placeholder}
          alt="banner"
        />
      </div>

      <ScrollAnimation direction="bottomToTop">
        <div className="subsection">
          <div className="box">Children Deserve Bright Future</div>
          <div className="title">Our Benefits</div>
          <div className="para1">
            With a dedicated team of experienced educators, state-of-the-art
            facilities, and a comprehensive curriculum, we aim to lay a strong
            foundation for your child's future.
          </div>
        </div>
      </ScrollAnimation>

      <div className="clubs1">
        {[
          club_icon_1,
          club_icon_2,
          club_icon_3,
          club_icon_4,
          club_icon_5,
          club_icon_6,
        ].map((icon, index) => (
          <ScrollAnimation key={index} direction="leftToRight" index={index}>
            <div className="club-card1">
              <img src={icon} alt="" className="club-icon" />
              <h4>
                {
                  [
                    "Play-Based Learning",
                    "Individualized Attention",
                    "Parent Involvement",
                    "Alumni Achievements",
                    "Science Club",
                    "Cooking and Culinary Arts",
                  ][index]
                }
              </h4>
              <p>
                {
                  [
                    "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
                    "Our small class sizes enable personalized attention, catering to each child's unique needs.",
                    "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
                    "Our small class sizes enable personalized attention, catering to each child's unique needs.",
                    "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
                    "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
                  ][index]
                }
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation direction="bottomToTop">
        <div className="subsection">
          <div className="box">Services</div>
          <div className="title">Our Services</div>
        </div>
      </ScrollAnimation>

      <div className="service-section">
        {serviceData.slice(0, 2).map((service, index) => (
          <ScrollAnimation key={index} direction="leftToRight" index={index}>
            <Card1
              title={service.title}
              placeholder={placeholder}
              image={index === 0 ? board : students}
              content={service.content}
            />
          </ScrollAnimation>
        ))}
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
