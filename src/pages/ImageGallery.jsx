import React, { useState } from "react";
import "./ImageGallery.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../components/Academics";
import photo1 from "../assets/images/DSC_3397.jpeg";
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
import img_1 from "../assets/images/DSC_5195.jpeg";
import img_2 from "../assets/images/DSC_5621.jpeg";
import img_3 from "../assets/images/DSC_5591.jpeg";
import img_4 from "../assets/images/DSC_3380.jpeg";
import img_5 from "../assets/images/182A0720.jpeg";
import img_6 from "../assets/images/DSC_3709.jpeg";
import img_7 from "../assets/images/photo1.jpeg";
import img_8 from "../assets/images/DSC_5613.jpeg";
import celebration from "../assets/images/DSC_5504.jpeg";
import sps from "../assets/images/SpS.jpeg";
import sps2 from "../assets/images/DSC_3528.jpeg";
 import students from "../assets/images/students2.jpeg";
 import board from "../assets/images/board2.jpeg";
import AP from "../assets/images/DSC_5601.jpeg";
import EA from "../assets/images/DSC_3706.jpeg";
import SSS from "../assets/images/DSC_3483.jpeg";
import CE from "../assets/images/DSC_3458.jpeg";
import p1 from "../assets/images/photo15.jpeg";
import p2 from "../assets/images/photo14.jpeg";

const images = [photo1,photo2,photo3,photo4,board,AP,SSS,CE,p1,p2,EA,students,photo5,photo6,photo7,photo8,photo9,photo11,photo12,photo13,photo14,img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8,sps]

const ImageGallery = () => {
  const [academics, setAcademics] = useState(false);
  const [extracurricular, setExtracurricular] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [wrkEvents, setWrkEvents] = useState(false);


  const Generateimages = () =>{
      return( <>
        <div className="all-image-section">
          {images.map((image,index)=>(
              <img src={image} className="all-image" alt={`image${index}`}/>
          ))}
        </div>
      </>)
  }

  function handleOpenSection(func, value) {
    func(!value);
  }

  return (
    <div className="gallery-page">
      <div className="images-section">
        <div className="service-title">Academics</div>
        {!academics && (
          <Carousel showDots={true} responsive={responsive}>
            <div className="about-image-div-gallery">
              <img src={photo1} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo2} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo3} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo4} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo5} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo6} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo7} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo8} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo9} className="about-image" />
            </div>
            <div className="view-more-section">
              <img src={photo8} className="view-more-image" />
              <img src={photo9} className="view-more-image" />
              <img src={photo1} className="view-more-image" />
              <div className="blur-box">
                <img src={photo2} className="blur-image " />
                <div
                  className="view-more-text"
                  onClick={() => handleOpenSection(setAcademics, academics)}
                >
                  View More..
                </div>
              </div>
            </div>
          </Carousel>
        )}
        {academics && <Generateimages />}
      </div>
      <div className="images-section">
        <div className="service-title">Extracurricular</div>
        {!extracurricular && (
          <Carousel showDots={true} responsive={responsive}>
            <div className="about-image-div-gallery">
              <img src={photo10} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo11} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo12} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo13} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo14} className="about-image" />
            </div>
            <div className="view-more-section">
              <img src={photo10} className="view-more-image" />
              <img src={photo11} className="view-more-image" />
              <img src={photo12} className="view-more-image" />
              <div className="blur-box">
                <img src={photo14} className="blur-image " />
                <div
                  className="view-more-text"
                  onClick={() =>
                    handleOpenSection(setExtracurricular, extracurricular)
                  }
                >
                  View More..
                </div>
              </div>
            </div>
          </Carousel>
        )}
        {extracurricular && <Generateimages />}
      </div>
      <div className="images-section">
        <div className="service-title">Programs</div>
        {!programs && (
          <Carousel showDots={true} responsive={responsive}>
            <div className="about-image-div-gallery">
              <img src={photo1} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo2} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo3} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo4} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo5} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo6} className="about-image" />
            </div>

            <div className="about-image-div-gallery">
              <img src={photo7} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo8} className="about-image" />
            </div>
            <div className="about-image-div-gallery">
              <img src={photo9} className="about-image" />
            </div>
            <div className="view-more-section">
              <img src={photo8} className="view-more-image" />
              <img src={photo9} className="view-more-image" />
              <img src={photo1} className="view-more-image" />
              <div className="blur-box">
                <img src={photo2} className="blur-image " />
                <div
                  className="view-more-text"
                  onClick={() => handleOpenSection(setPrograms, programs)}
                >
                  View More..
                </div>
              </div>
            </div>
          </Carousel>
        )}
        {programs && <Generateimages />}
      </div>
      <div className="images-section">
        <div className="service-title">Workshops & Events</div>
        {!wrkEvents && (
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
            <div className="view-more-section">
              <img src={photo10} alt="trustees" className="view-more-image" />
              <img src={photo11} alt="trustees" className="view-more-image" />
              <img src={photo12} alt="trustees" className="view-more-image" />
              <div className="blur-box">
                <img src={photo14} alt="trustees" className="blur-image " />
                <div
                  className="view-more-text"
                  onClick={() => handleOpenSection(setWrkEvents, wrkEvents)}
                >
                  View More..
                </div>
              </div>
            </div>
          </Carousel>
        )}
        {wrkEvents && <Generateimages />}
      </div>
    </div>
  );
};

export default ImageGallery;
