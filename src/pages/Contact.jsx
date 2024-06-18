import React from "react";
import "./Contact.css";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

     formData.append("access_key", "43a0a519-a9e8-4647-93a7-eb235bac328f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  const handleLocationClick = () => {
    // Redirect to  location on Google Maps
    window.location.href = "https://maps.app.goo.gl/tGM4nLZ9wWRk6uzg8";
  };

  return (
    <>
      <div className="contact-us">
        <div className="contact-text">
          <h2>CONTACT US</h2>
        </div>
        <div className="mail">
          <form onSubmit={onSubmit}>
            <label>Enter your name :</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
            <label>Enter your Email :</label>
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your Email"
            />
            <label htmlFor="">Enter your message</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="submit-btn" type="submit">
              SUBMIT
            </button>
          </form>
          <span className="send">{result}</span>
        </div>

        
        <button className="location" onClick={handleLocationClick}>
          Location
        </button>
      </div>
    </>
  );
};

export default Contact;
