import React from 'react'
import './Card1.css'


const Card1 = ({image, title, content,index}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-para">{content}</p>
      </div>
    </div>
  );
}

export default Card1