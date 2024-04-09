import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './VerifyEmailPage.css';

const VerifyEmailPage = () => {
 const [isNavOpen, setIsNavOpen] = useState(false);
 const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
 const navigate = useNavigate(); // Use the useNavigate hook

 useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
 }, []);

 const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
 };

 const handleBrandClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    navigate('/'); // Navigate to the Form page
 };

 return (
    <div className="verify-email-page">
      <nav className={`navbar ${isLargeScreen ? 'large-screen' : ''}`}>
        <div className="navbar-brand">
          <a href="#" className='Brand' onClick={handleBrandClick}>Dribble</a> {/* Adjusted onClick handler */}
        </div>
        <button className="navbar-toggler" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-content ${isNavOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Inspiration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Find Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Learn Design</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Go Pro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hire Designers</a>
            </li>
          </ul>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <i className="fas fa-search search-icon"></i>
        </div>
      </nav>
      <div className="email-verification-message">
        <p className='top-text'>Please verify your email.....</p>
        <img src="/Email2.png" alt="Email" />
        <h6 className='email-verify'>Please verify your email address. we have sent a confirmation email to:</h6>
        <h6 className='Email-address'>account@refero.design</h6>
        <h6 className='email-verify'>Check the confirmation link in that email to begin using Dribble</h6>
        <h6 className='email-verify1'>Didn't recieve the email? Check your Spam folder.it may have been caught by a filter. if you still don't See it.you can <span><a href="">resend the conformation email.</a></span></h6>
        <h6 className='email-verify2'>Wrong email address? <span> <a href="">Change it</a></span></h6>
      </div>
    </div>
 );
};

export default VerifyEmailPage;
