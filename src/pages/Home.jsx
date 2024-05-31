import React from "react";
import bannerImage from "../assets/images/banner image.jpg";
import "./Home.css";
import Container from "../assets/images/Container.png";
import Card1 from "../components/Card1";
import { serviceData } from "../data";
import students from "../assets/images/students.png";
import board from "../assets/images/board.png";

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
      <div className="benefits-section">
        <img src={Container} className="benefits-img" />
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
      <div className="newsletter">
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
      </div>
    </div>
  );
};

export default Home;
