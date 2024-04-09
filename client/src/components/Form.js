import React, { useState } from 'react';
import "./Style.css";
import { useNavigate } from 'react-router-dom';

export default function Form() {
 const [isChecked, setIsChecked] = useState(false);
 const [name, setName] = useState("");
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();

 // Define the handleFormSubmission function
 const handleFormSubmission = async () => {
    // Example: Perform some form validation or other operations here
    // If everything is valid, you can proceed with the form submission
    // For now, let's just log a message to indicate the function is being called
    console.log("Form submission logic goes here");
 };

 const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isChecked) {
      alert("Please agree to the Terms of Service, Privacy Policy, and default Notification Settings.");
      return;
    }
    await handleFormSubmission(); // Call the handleFormSubmission function

    try {
      const result = await fetch("http://localhost:4000/", {
        method: 'post',
        body: JSON.stringify({ name, username, email, password }),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await result.json();
      localStorage.setItem("user", JSON.stringify(data));
      console.log("Form submitted and data fetched successfully");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    navigate('/welcome');
 };

 return (
    <div className='container'>
      <div className="image-container">
        <img src="/13824.jpg" alt="Background Image" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2 className='text-center pt-3'>SIGNUP TO DRIBBLE</h2>
          <div className="name-username-container">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input type="text" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="checkbox-container">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span>Creating an account means you're okay with our <a href="terms-of-service.html">Terms of Service</a>, <a href="privacy-policy.html">Privacy Policy</a>, and our default Notification Settings.</span>
            </label>
          </div>
          <button type='submit' className="btn btn-success btn-success-left custom-submit-btn">Create Account</button>
        </form>
      </div>
    </div>
 );
}
