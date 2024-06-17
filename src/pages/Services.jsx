import React from "react";
import "./Services.css";
import { faqData } from "../data";
import FAQ from "../components/FAQ";
import ScrollAnimation from "../components/ScrollAnimation"; // Import the ScrollAnimation component here
import AP from "../assets/images/DSC_5601.jpeg";
import EA from "../assets/images/DSC_3706.jpeg";
import SSS from "../assets/images/DSC_3483.jpeg";
import CE from "../assets/images/DSC_3458.jpeg";
import p1 from "../assets/images/student1.jpeg";
import p2 from "../assets/images/photo14.jpeg";
import placeholder from "../assets/images/placeholder-image.png";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import p_placeholder from "../assets/images/pp-placeholder.png";

const Services = () => {
  return (
    <>
      <ScrollAnimation direction="bottomToTop" index={0}>
        <div className="our-services">
          <div className="service-title">Our Services</div>
          <div className="boxes-section">
            <ScrollAnimation direction="leftToRight" index={1}>
              <div className="service-box">
                <ImageWithPlaceholder
                  src={AP}
                  placeholder={placeholder}
                  alt="Academic programs"
                  className="box-image"
                />
                <div className="box-title">Academic Programs</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="leftToRight" index={2}>
              <div className="service-box">
                <ImageWithPlaceholder
                  src={EA}
                  placeholder={placeholder}
                  alt="Extracurricular activities"
                  className="box-image"
                />
                <div className="box-title">Extracurricular Activities</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="leftToRight" index={1}>
              <div className="service-box">
                <ImageWithPlaceholder
                  src={SSS}
                  placeholder={placeholder}
                  alt="sss"
                  className="box-image"
                />
                <div className="box-title">Student Support Services</div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="leftToRight" index={2}>
              <div className="service-box">
                <ImageWithPlaceholder
                  src={CE}
                  placeholder={placeholder}
                  alt="ce"
                  className="box-image"
                />
                <div className="box-title">Community Engagement</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation direction="bottomToTop" >
        <div className="testimonials">
          <div className="service-title">Student Testimonials</div>
          <div className="testimonial-box">
            <div className="customer-feedback">
              <ImageWithPlaceholder
                src={p1}
                placeholder={p_placeholder}
                alt="customer1"
                className="customer-img"
              />
              " I am proud to be part of this incredible school. The dedication
              of our teachers and the commitment to academic excellence create
              an inspiring learning environment. The variety of extracurricular
              activities offered here, from sports to arts, allows us to develop
              our skills and interests beyond the classroom. With modern
              facilities and a supportive community, our school truly prepares
              us for the future." - Valarmathi
            </div>
            <div className="customer-feedback">
              <ImageWithPlaceholder
                src={p2}
                placeholder={p_placeholder}
                alt="customer2"
                className="customer-img"
              />
              " The quality of education and the dedication of our teachers are
              exceptional. Our school not only focuses on academics but also
              encourages participation in various extracurricular activities,
              which helps in overall development. The well-maintained facilities
              and a positive school culture make it a great place to learn and
              grow." - Pragathi
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation direction="bottomToTop" >
        <div className="service-title">
          Ready to Join Us? <br />
          <span className="sub-title">
            Contact us today to learn more about our services and how we can
            support your child's educational journey.
          </span>
        </div>
      </ScrollAnimation>

      <ScrollAnimation direction="bottomToTop" >
        <div className="faq">
          <div className="service-title">FAQ</div>
          <div className="q-a">
            {faqData.map((data, index) => (
              <FAQ question={data.Q} key={index} answer={data.answer} />
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Services;
