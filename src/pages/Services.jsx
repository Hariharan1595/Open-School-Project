import React from "react";
import "./Services.css";
import { faqData } from "../data";
import FAQ from "../components/FAQ";
import AP from "../assets/images/AP.png";
import EA from "../assets/images/EA.png";
import SSS from "../assets/images/SSS.png";
import CE from "../assets/images/CE.png";
import p1 from "../assets/images/parent1.png";
import p2 from "../assets/images/parent2.png";

const Services = () => {
  return (
    <>
      <div className="our-services">
        <div className="service-title">Our Services</div>
        <div className="boxes-section">
          <div className="service-box">
            <img src={AP} alt="Academic programs" className="box-image" />
            <div className="box-title">Academic Programs</div>
          </div>
          <div className="service-box">
            <img
              src={EA}
              alt="Extracurricular Activities"
              className="box-image"
            />
            <div className="box-title">Extracurricular Activities</div>
          </div>
          <div className="service-box">
            <img
              src={SSS}
              alt="Student Support Services"
              className="box-image"
            />
            <div className="box-title">Student Support Services</div>
          </div>
          <div className="service-box">
            <img src={CE} alt="Community Engagement" className="box-image" />
            <div className="box-title">Community Engagement</div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="service-title">Customer Testimonials</div>
        <div className="testimonial-box">
          <div className="customer-feedback">
            <img className="customer-img" src={p1} alt="customer1" />
            "Enrolling our child at [School Name] was the best decision we made
            . The comprehensive academic programs and supportive environment
            have made a significant difference in their learning experience." -
            [Parent Name]
          </div>
          <div className="customer-feedback">
            <img className="customer-img" src={p2} alt="customer1" />
            "Enrolling our child at [School Name] was the best decision we made
            . The comprehensive academic programs and supportive environment
            have made a significant difference in their learning experience." -
            [Parent Name]
          </div>
        </div>
      </div>
      <div className="service-title">
        Ready to Join Us? <br />
        <span className="sub-title">
          Contact us today to learn more about our services and how we can
          support your child's educational journey.
        </span>
      </div>

      <div className="faq">
        <div className="service-title">FAQ</div>
        <div className="q-a">
          {faqData.map((data, index) => (
            <FAQ question={data.Q} key={index} answer={data.answer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
