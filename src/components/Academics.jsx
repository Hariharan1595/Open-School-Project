import React from "react";
import "./Academics.css";
import profile_1 from "../assets/images/faculty1.jpeg";
import profile_2 from "../assets/images/img-2.png";
import profile_3 from "../assets/images/img-3.png";
import profile_4 from "../assets/images/img-4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photo12 from "../assets/images/182A0902.jpeg";
import ImageWithPlaceholder from "./ImageWithPlaceholder";
import placeholder from "../assets/images/placeholder-image.png";
import p_placeholder from "../assets/images/pp-placeholder.png";

import { FacultyData } from "../data";

const photos = [
  profile_1,
  profile_2,
  profile_3,
  profile_4,
 
];

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Product(props) {
  return (
    <div className="faculty-card">
      <ImageWithPlaceholder
        src={props.url}
        placeholder={p_placeholder}
        alt="faculty-image"
        className="product--image"
      />

      <div className="profile-details">
        <h2 className="profile-name">{props.name}</h2>
        <p className="price">{props.price}</p>
        <p className="profile-desc">{props.description}</p>
      </div>
    </div>
  );
}

const Academics = () => {
  const product = FacultyData.map((item, index) => (
    <Product
      name={item.name}
      url={photos[index]}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="academics">
      <h3>CURRICULUM OVERVIEW</h3>
      <p>
        Our curriculum blends academic excellence with holistic development,
        fostering critical thinking and creativity. It emphasizes core subjects
        while integrating 21st-century skills and real-world experiences.
        Through differentiated instruction and personalized support, we ensure
        every student reaches their full potential. Regular updates reflect best
        practices, preparing students to thrive in a rapidly changing world.
      </p>
      

      <div className="profile">
        <h2>FACULTY PROFILE</h2>
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>
    </div>
  );
};

export default Academics;
