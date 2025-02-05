import React, { useState } from 'react';
import '../App.css';

function SurveyPage() {
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const cuisines = [
    { name: 'Italian 🍝', value: 'italian' },
    { name: 'Chinese 🥡', value: 'chinese' },
    { name: 'Mexican 🌮', value: 'mexican' },
    { name: 'Indian 🍛', value: 'indian' },
    { name: 'Japanese 🍣', value: 'japanese' },
    { name: 'French 🥖', value: 'french' },
    { name: 'Mediterranean 🥗', value: 'mediterranean' },
    { name: 'American 🍔', value: 'american' },
  ];

  const handleCuisineSelect = (value) => {
    if (selectedCuisines.includes(value)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== value));
    } else if (selectedCuisines.length < 3) {
      setSelectedCuisines([...selectedCuisines, value]);
    }
  };

  const handleSubmit = () => {
    console.log('Selected Cuisines:', selectedCuisines);
    // Proceed to the next survey step or action
  };

  return (
    <div className="survey-page">
      <h1>What are your Top Three Cuisines?</h1>
      <div className="options">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine.value}
            className={`option-btn ${
              selectedCuisines.includes(cuisine.value) ? 'selected' : ''
            }`}
            onClick={() => handleCuisineSelect(cuisine.value)}
          >
            {cuisine.name}
          </button>
        ))}
      </div>
      <button
        className="cta-btn"
        onClick={handleSubmit}
        disabled={selectedCuisines.length < 3}
      >
        Submit
      </button>
    </div>
  );
}

export default SurveyPage;
