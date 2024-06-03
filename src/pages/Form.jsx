import React, { useState, useRef } from "react";
import "./Form.css"; //


const AdmissionForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    grade: "",
    PhoneNumber: "",
    emailId: "",
    address: "",
  });

  const [showForm, setShowForm] = useState(true);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission
    console.log(formData);
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setShowForm(false);
    }
  };

  return (
    <div className="admission-form">
      {/* <button onClick={toggleForm}>Open Admission Form</button> */}
      {showForm && (
        <div className="form-overlay" onClick={handleClickOutside}>
          <div className="form-container" ref={formRef}>
            <h2>Admission Form<br/><br/></h2>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Grade:</label>
                <input
                  type="text"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email Id:</label>
                <input
                  type="text"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionForm;
