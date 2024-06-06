import React from "react";
import "./Services.css";
import { faqData } from "../data";
import FAQ from "../components/FAQ";
import AP from "../assets/images/DSC_5601.JPG";
import EA from "../assets/images/DSC_3706.JPG";
import SSS from "../assets/images/DSC_3483.JPG";
import CE from "../assets/images/DSC_3458.JPG";
import p1 from "../assets/images/photo15.jpeg";
import p2 from "../assets/images/photo14.jpeg";

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
        <div className="service-title">Student Testimonials</div>
        <div className="testimonial-box">
          <div className="customer-feedback">
            <img className="customer-img" src={p1} alt="customer1" />" I am
            proud to be part of this incredible school. The dedication of our
            teachers and the commitment to academic excellence create an
            inspiring learning environment. The variety of extracurricular
            activities offered here, from sports to arts, allows us to develop
            our skills and interests beyond the classroom. With modern
            facilities and a supportive community, our school truly prepares us
            for the future." - Mohamed
          </div>
          <div className="customer-feedback">
            <img className="customer-img" src={p2} alt="customer1" />" The
            quality of education and the dedication of our teachers are
            exceptional. Our school not only focuses on academics but also
            encourages participation in various extracurricular activities,
            which helps in overall development. The well-maintained facilities
            and a positive school culture make it a great place to learn and
            grow." - Pragathi
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
