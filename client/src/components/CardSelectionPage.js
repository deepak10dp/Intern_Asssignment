import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardSelectionPage.css';

const CardSelectionPage = () => {
 const [selectedCards, setSelectedCards] = useState([]);
 const [selectedCardText, setSelectedCardText] = useState('');
 const navigate = useNavigate();

 const handleCardClick = (cardId, cardText) => {
    setSelectedCards(prevSelectedCards => {
      if (prevSelectedCards.includes(cardId)) {
        return prevSelectedCards.filter(id => id !== cardId);
      } else {
        return [...prevSelectedCards, cardId];
      }
    });
    setSelectedCardText(cardText);
 };

 const handleBack = () => {
    // Navigate to the Welcome page
    navigate('/welcome');
 };

 const handleSubmit = () => {
    console.log(selectedCards);
    navigate('/verify-email');
 };

 return (
    <div className="card-selection-page">
      <button onClick={handleBack} className="back-button">← Back</button>
      <h1>What brings you to Dribbble?</h1>
      <p className="small-font">Select the options that best describe you. Don't worry, you can explore the other options later.</p>
      <div className="cards-container">
        {['Designer', 'Artist', 'Creative'].map((card, index) => (
          <div
            key={index}
            className={`card ${selectedCards.includes(card) ? 'selected' : ''}`}
            onClick={() => handleCardClick(card, `Over 7 million over vast community of ${card.toLowerCase()}s. Dribbble is the leading source of design inspiration.`)}
          >
            <img src={`/creative-images-png-7.png`} alt={card} />
            <p>{card} looking to share my work</p>
            {selectedCards.includes(card) && (
              <div className="animation-text">
                {selectedCardText}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className='multiple-select'>Anything else? you can select multiple</p>
      <button onClick={handleSubmit} className="submit-button">Finish</button>
      <h6 className='back'>or press back button</h6>
    </div>
 );
};

export default CardSelectionPage;
