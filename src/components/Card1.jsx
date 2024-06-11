import React from "react";
import "./Card1.css";
import ImageWithPlaceholder from "./ImageWithPlaceholder";


const Card1 = ({ image,placeholder, title, content, index }) => {
  return (
    <div className="card">
      <ImageWithPlaceholder
        src={image}
        placeholder={placeholder}
        alt="Description of image"
        className="card-image"
      />

      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-para">{content}</p>
      </div>
    </div>
  );
};

export default Card1;
