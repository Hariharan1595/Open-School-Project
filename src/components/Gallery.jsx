import React from "react";
import "./Gallery.css";
import gal_1 from "../assets/images/gal-1.png";
import gal_2 from "../assets/images/gal-2.png";
import gal_3 from "../assets/images/gal-3.png";
import gal_4 from "../assets/images/gal-4.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-text">
        <h2>Our Gallery</h2>
        <h3>Our Rooms Gallery</h3>
        <p>
          Step into our Gallery and immerse yourself in a visual journey of
          cherished moments and unforgettable experiences at our kindergarten
          school.
        </p>
      </div>
      <ul className="list">
        <li>All</li>
        <li>Classrooms</li>
        <li>Library</li>
        <li>Science Lab</li>
        <li>Computer Lab</li>
        <li>Garden and Nature Area</li>
      </ul>
      <div className="gallery-img">
        <img src={gal_1} alt="" />
        <img src={gal_2} alt="" />
        <img src={gal_3} alt="" />
        <img src={gal_4} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
