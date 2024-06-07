import React from "react";
import "./ImageGallery.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../components/Academics";
import photo1 from "../assets/images/DSC_3397.jpeg";;
import photo2 from "../assets/images/DSC_3893.jpeg";
import photo3 from "../assets/images/DSC_3390.jpeg";
import photo4 from "../assets/images/DSC_3395.jpeg";
import photo5 from "../assets/images/DSC_3408.jpeg";
import photo6 from "../assets/images/DSC_3412.jpeg";
import photo7 from "../assets/images/DSC_3422.jpeg";
import photo8 from "../assets/images/DSC_3426.jpeg";
import photo9 from "../assets/images/DSC_3430.jpeg";
import photo10 from "../assets/images/DSC_5181.jpeg";
import photo11 from "../assets/images/182A0703.jpeg";
import photo12 from "../assets/images/182A0759.jpeg";
import photo13 from "../assets/images/182A0830.jpeg";
import photo14 from "../assets/images/DSC_5181.jpeg";


const ImageGallery = () => {
  return (
    <div className="gallery-page">
      <div className="images-section">
        <Carousel showDots={true} responsive={responsive}>
          <div className="about-image-div-gallery">
            <img src={photo1} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo2} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo3} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo4} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo5} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo6} alt="trustees" className="about-image" />
          </div>

          <div className="about-image-div-gallery">
            <img src={photo7} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo8} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo9} alt="trustees" className="about-image" />
          </div>
        </Carousel>
      </div>
      <div className="image-section">
        <Carousel showDots={true} responsive={responsive}>
          <div className="about-image-div-gallery">
            <img src={photo10} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo11} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo12} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo13} alt="trustees" className="about-image" />
          </div>
          <div className="about-image-div-gallery">
            <img src={photo14} alt="trustees" className="about-image" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageGallery;
