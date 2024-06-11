import React, { useState } from "react";

const ImageWithPlaceholder = ({ src, placeholder, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && (
        <img
          src={placeholder}
          alt="placeholder"
          className={className}
          style={{
            backgroundColor: " #e7e7e7",
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="eager"
        onLoad={handleImageLoad}
        style={{
          display: isLoaded ? "" : "none",
          transition: "opacity 2s ease",
          opacity: isLoaded ? 1 : 0,
        }}
        className={className}
      />
    </>
  );
};

export default ImageWithPlaceholder;
