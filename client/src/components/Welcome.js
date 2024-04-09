import React, { useState } from 'react';
import "./Wlecome.css";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
 const navigate = useNavigate();
 const [previewSource, setPreviewSource] = useState(null);

 const goBack = () => {
    // Navigate to the Form page
    navigate('/');
 };

 const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSource(null);
    }
 };

 const handleSubmit = () => {
    if (!previewSource) {
      alert('Please upload an image.');
    } else {
      navigate('/card-selection');
    }
 };

 return (
    <div className="welcome-container">
      <button onClick={goBack} className="back-button">← Back</button>
      <h1>Welcome! Let's create your profile.</h1>
      <p>Let others get to know you better! You can do this later.</p>
      <div className="content-container">
        <div className="avatar-upload">
          <label htmlFor="imageUpload" className="avatar-label">
            <span className="bold-text">Add an avatar</span>
            <input type="file" id="imageUpload" name="imageUpload" accept="image/*" className="avatar-input" onChange={handleImageUpload} />
            <span className="choose-image">Choose image</span>
          </label>
        </div>
        <div className="avatar-preview-container">
          {previewSource ? (
            <img src={previewSource} alt="Avatar Preview" className="avatar-preview" />
          ) : (
            <div className="avatar-placeholder"></div>
          )}
        </div>
        <div className="location-input">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>Next</button>
        <h6 className='back'>or press back button</h6>
      </div>
    </div>
 );
};

export default Welcome;
