import React, { useState, useEffect } from 'react';
import './Galley2.css';

const Gallery2 = () => {
  const [images, setImages] = useState([]);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedImages = localStorage.getItem('images');
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);

  const handleBeforeUnload = () => {
    localStorage.setItem('images', JSON.stringify(images));
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [images]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleLogin = () => {
    if (usernameInput === 'hari' && passwordInput === '1234') {
      setLoggedIn(true);
    }
  };

  return (
    <div className="gallery-container">
      <h1>Gallery Page</h1>
      {!loggedIn && (
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
      {loggedIn && (
        <input type="file" accept="image/*" onChange={handleImageUpload} multiple />
      )}
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery2;
