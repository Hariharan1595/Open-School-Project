import React from "react";
import "./ImageGallery.css";
import photo1 from "../assets/images/photo1.jpeg";
import photo2 from "../assets/images/photo2.jpeg";
import photo3 from "../assets/images/photo4.jpeg";
import photo4 from "../assets/images/photo5.jpeg";
import photo5 from "../assets/images/photo6.jpeg";
import photo6 from "../assets/images/photo7.jpeg";
import photo7 from "../assets/images/photo8.jpeg";
import photo8 from "../assets/images/photo9.jpeg";
import photo9 from "../assets/images/photo10.jpeg";
import photo10 from "../assets/images/photo11.jpeg";
import photo11 from "../assets/images/photo12.jpeg";
import photo12 from "../assets/images/photo13.jpeg";

const ImageGallery = () => {
  return (
    <div className="gallery-page">
      <div className="images-section">
        <img src={photo1} alt="image" className="gallery-image" />

        <img src={photo4} alt="image" className="gallery-image" />
        <img src={photo5} alt="image" className="gallery-image" />
        <img src={photo6} alt="image" className="gallery-image" />
        <img src={photo7} alt="image" className="gallery-image" />
        <img src={photo8} alt="image" className="gallery-image" />

        <img src={photo10} alt="image" className="gallery-image" />
        <img src={photo11} alt="image" className="gallery-image" />
        <img src={photo12} alt="image" className="gallery-image" />
        <img src={photo2} alt="image" className="gallery-image" />
        <img src={photo3} alt="image" className="gallery-image" />
        <img src={photo9} alt="image" className="gallery-image" />
      </div>
    </div>
  );
};

export default ImageGallery;
