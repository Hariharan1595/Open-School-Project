import React from "react";
import "./Services.css";
import { faqData } from "../data";
import FAQ from "../components/FAQ";

const Services = () => {
  return (
    <>
      <div className="our-services">
        <div className="title">Our Services</div>
        <div className="boxes-section">
          <div className="box">
            <img
              src="src/assets/images/AP.png"
              alt="Academic programs"
              className="box-image"
            />
            <div className="box-title">Academic Programs</div>
          </div>
          <div className="box">
            <img
              src="src/assets/images/EA.png"
              alt="Extracurricular Activities"
              className="box-image"
            />
            <div className="box-title">Extracurricular Activities</div>
          </div>
          <div className="box">
            <img
              src="src/assets/images/SSS.png"
              alt="Student Support Services"
              className="box-image"
            />
            <div className="box-title">Student Support Services</div>
          </div>
          <div className="box">
            <img
              src="src/assets/images/CE.png"
              alt="Community Engagement"
              className="box-image"
            />
            <div className="box-title">Community Engagement</div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="title">Customer Testimonials</div>
        <div className="testimonial-box">
          <div className="customer-feedback">
            <img
              className="customer-img"
              src="src/assets/images/parent1.png"
              alt="customer1"
            />
            "Enrolling our child at [School Name] was the best decision we made
            . The comprehensive academic programs and supportive environment
            have made a significant difference in their learning experience." -
            [Parent Name]
          </div>
          <div className="customer-feedback">
            <img
              className="customer-img"
              src="src/assets/images/parent2.png"
              alt="customer1"
            />
            "Enrolling our child at [School Name] was the best decision we made
            . The comprehensive academic programs and supportive environment
            have made a significant difference in their learning experience." -
            [Parent Name]
          </div>
        </div>
      </div>
      <div className="title">
        Ready to Join Us?{" "}<br/>
        <span className="sub-title">
          Contact us today to learn more about our services and how we can
          support your child's educational journey.
        </span>
      </div>
      
      
      <div className="faq">
        <div className="title">FAQ</div>
        <div className="q-a">
            {faqData.map((data,index)=>(
                <FAQ question={data.Q} key={index} answer={data.answer} />
            ))}
        </div>
        
      </div>
    </>
  );
};

export default Services;
