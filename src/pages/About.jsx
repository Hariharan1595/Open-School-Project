import React, { useState } from "react";
import "./About.css";
import photo4 from "../assets/images/photo5.jpeg";
import photo11 from "../assets/images/photo12.jpeg";
import img_2 from "../assets/images/DSC_5621.jpeg";
import img_3 from "../assets/images/DSC_5591.jpeg";
import img_4 from "../assets/images/DSC_5591.jpeg";

import img_5 from "../assets/images/182A0720.jpeg";
import img_6 from "../assets/images/DSC_3709.jpeg";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import placeholder from "../assets/images/placeholder-image.png";

const About = () => {
  

  return (
    <div className="about">
      <h3>WHY WE DOING THIS</h3>
      <div className="about-image-div">
        <ImageWithPlaceholder
          src={img_2}
          placeholder={placeholder}
          alt="srudents-image"
          className="about-image"
        />
      </div>
      <p>
        At AHUM Academy of Open Schooling, we believe that education should be
        accessible to everyone, regardless of their financial situation. Many
        students in India struggle to access quality education due to high costs
        and limited resources. Our mission is to remove these barriers and
        provide affordable, accessible education to all. By offering open
        schooling, we empower students with the knowledge and skills they need
        to build a better future for themselves and their communities.
      </p>

      <h3>WHO ARE WE</h3>
      <div className="about-image-div">
        <ImageWithPlaceholder
          src={img_3}
          placeholder={placeholder}
          alt="students-image"
          className="about-image"
        />
      </div>
      <p>
        We are AHUM Academy of Open Schooling, run by AHUM Charitable Trust. Our
        non-profit organization is dedicated to making education accessible for
        all. Our team consists of passionate educators, volunteers, and
        community members who are committed to helping students succeed. We
        provide a range of educational resources and support to ensure that
        every student has the opportunity to learn and grow.
      </p>

      <h3>HOW LONG WE HAVE BEEN DOING THIS DOING THIS</h3>
      <div className="about-image-div">
        <ImageWithPlaceholder
          src={img_5}
          placeholder={placeholder}
          alt="srudents-image"
          className="about-image"
        />
      </div>
      <p>
        AHUM Academy of Open Schooling has been making a difference in education
        for the past three years. Since our inception, we have been dedicated to
        providing affordable and accessible education to students across India.
        In these three years, we have helped numerous students achieve their
        educational goals and realize their potential.
      </p>

      <h3>HOW WE STARTED</h3>
      <div className="about-image-div">
        <ImageWithPlaceholder
          src={img_6}
          placeholder={placeholder}
          alt="srudents-image"
          className="about-image"
        />
      </div>
      <p>
        Our journey began three years ago with a simple yet powerful vision: to
        make quality education available to all. AHUM Charitable Trust
        established AHUM Academy of Open Schooling with a firm commitment to
        breaking down barriers to education. From our humble beginnings, we have
        grown into a trusted institution that is making a significant impact in
        the lives of students.
      </p>

      <h3>WHAT IS THE DIFFERENCE FROM OTHERS</h3>
      <div className="about-image-div">
        <ImageWithPlaceholder
          src={img_4}
          placeholder={placeholder}
          alt="srudents-image"
          className="about-image"
        />
      </div>
      <p>
        What sets AHUM Academy of Open Schooling apart is our hands-on approach
        and dedication to student success. In addition to offering open
        schooling programs, we actively engage with our students through various
        events, workshops, and support programs. We believe in providing not
        just education but also a supportive community where students can thrive
        and grow. Through our commitment to accessibility, affordability, and
        student support, we are making a difference in education one student at
        a time.
      </p>

      <h3>
        <u>AHUM CHARITABLE TRUST</u>
      </h3>

      <div className="about-image-div">
        <img src={photo11} alt="trustees" className="about-image" />
      </div>

      <h3>OBJECTIVES OF THE TRUST </h3>
      <p className="objectives">
        1. To form and develop Yoga & Meditation centers and resorts for general
        public for enhancing peaceful mindset and stress free living.
        <br />
        2. To inculcate the mindset of entrepreneurship skills and government
        facilities available to them.
        <br />
        3. To organize the business with latest Technological innovations and
        techniques for better social transformation.
        <br />
        4. To cultivate medicinal value plants and natural farming for day to
        day living.
        <br />
        5. To create health awareness and Better life style skill sets for
        holistic life.
        <br />
        6. To build erect and construct and to aid and assist in the build
        erection and constructions of houses, dormitories and places or
        residence for the poor destitute and those handicapped in mind or body
        to afford them all comfort and amenities.
        <br />
        7. To conduct classes for the poor, reading and to give food, clothing
        and cash grants to the poor and to afford relief to people of industries
        and affected by earthquake, food, famine, pestilence and other case and
        to the orphanages, rescue house and similar institutions and societies.
        <br />
        8. To encourage the Human Resources Development Educational Institutions
        from Pre-Primary, Primary, High school, Pre-University College, Degree
        colleges, Post-Graduation, and other courses. Teacher Training Colleges
        like D.Ed., B.Ed., B.PEd and other educational institutions as per the
        norm's and stipulations of National Council for Teacher Education.
        Maintenance of learning centers for transformation of personality,
        confidence building, positive thinking, communication skills, human
        relationship principles, active listening, leadership qualities, body
        language, goal setting, time management, success principles.
        <br />
        9. To start, manage and administer any Orphanage, Nursing home, Old age
        Homes, Hospitals, libraries, Diagnostic Centers, Reading rooms, Schools,
        colleges, ITI institutes, Research Institutions and other institution
        and extend its benefits to society at large irrespective of caste, creed
        or social status and to acquire land and building and other assets and
        properties for achieving the objects of the Trust.
        <br />
        10. To provide Medical facilities for deserving children's of the rural
        locality. To start Rural Health Clinic, Hospitals, Mobile Health Units
        etc.
        <br />
        11. To take over, absorb or amalgamate with any other trust or society
        or association or institution whose objects are similar to the objects
        of this trust.
        <br />
        12. To operate the schools and rehabilitation centers for needy persons,
        belonging to all denominations, irrespective of caste, creed, race,
        religion or language.
        <br />
        13. To spread the messages of preserving and conserving the Indian
        culture and save the same from influence of the western cultures
        throughout India and in all foreign countries.
        <br />
        14. To help and to provide relief to the poor irrespective of caste,
        creed, race, religion or language.
        <br />
        15. To support and promote the growing of trees and drilling of bore
        wells, restoration of water tanks, taking up drinking water projects,
        water development programs and providing of space and rooms for
        conducting religious functions or any other allied activities as the
        trustees deem fit from time to time.
       
      </p>
    </div>
  );
};

export default About;
