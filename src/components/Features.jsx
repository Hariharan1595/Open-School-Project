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
import ScrollAnimation from "./ScrollAnimation";

const Features = () => {
  const featureData = [
    {
      src: Learn_1,
      title: "Language Arts",
      description: "Reading, writing, storytelling, and communication skills.",
    },
    {
      src: Learn_2,
      title: "Mathematics",
      description:
        "Number sense, basic operations, problem-solving, and logic.",
    },
    {
      src: Learn_3,
      title: "Workshops",
      description:
        "Exploring the natural world through hands-on experiments and investigations.",
    },
    {
      src: Learn_4,
      title: "Social Studies",
      description:
        "Cultivating an understanding of diverse cultures and communities.",
    },
    {
      src: Learn_5,
      title: "Arts and Crafts",
      description:
        "Encouraging creativity through various art forms and crafts.",
    },
    {
      src: Learn_6,
      title: "Physical Education",
      description: "Promoting physical fitness, coordination, and teamwork.",
    },
  ];

  return (
    <div className="features">
      <ScrollAnimation direction="bottomToTop">
        <div className="features-text">
          <h2>Our Features</h2>
          <h3>What Students Learn</h3>
          <p>
            At Little Learners Academy, we strive to cultivate a love for
            learning and equip children with essential skills for their future
            success. Our academic programs cover a wide range of subjects,
            allowing students to develop a strong foundation and discover their
            interests. Some key areas of learning include
          </p>
        </div>
      </ScrollAnimation>
      <div className="features-img">
        {featureData.map((feature, index) => (
          <ScrollAnimation key={index} direction="leftToRight" index={index}>
            <div className="features-card">
              <ImageWithPlaceholder
                src={feature.src}
                placeholder={placeholder}
                alt=""
                className=""
              />
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Features;
