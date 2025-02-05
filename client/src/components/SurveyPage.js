import React, { useState } from 'react';
import '../App.css';

function SurveyPage() {
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const cuisines = [
    { name: 'Italian', image: '/images/italian.jpg' },
    { name: 'Chinese', image: '/images/chinese.jpg' },
    { name: 'Mexican', image: '/images/mexican.jpg' },
    { name: 'Indian', image: '/images/indian.jpg' },
    { name: 'Japanese', image: '/images/japanese.jpg' },
    { name: 'French', image: '/images/french.jpg' },
    { name: 'Mediterranean', image: '/images/mediterranean.jpg' },
    { name: 'American', image: '/images/american.jpg' },
  ];

  const handleCuisineClick = (cuisineName) => {
    if (selectedCuisines.includes(cuisineName)) {
      // If already selected, remove it
      setSelectedCuisines(selectedCuisines.filter((name) => name !== cuisineName));
    } else if (selectedCuisines.length < 3) {
      // Add cuisine if less than 3 are selected
      setSelectedCuisines([...selectedCuisines, cuisineName]);
    }
  };

  const handleNextClick = () => {
    console.log('Selected cuisines:', selectedCuisines);
    // Navigate to the next step or handle submission
  };

  return (
    <div className="survey-page">
      <h1 className="question">What are your Top Three Cuisines?</h1>
      <div className="cuisine-options">
        {cuisines.map((cuisine, index) => (
          <div
            key={index}
            className={`cuisine-option ${
              selectedCuisines.includes(cuisine.name) ? 'selected' : ''
            }`}
            style={{ backgroundImage: `url(${cuisine.image})` }}
            onClick={() => handleCuisineClick(cuisine.name)}
          >
            {cuisine.name}
          </div>
        ))}
      </div>
      {selectedCuisines.length === 3 && (
        <button className="next-btn" onClick={handleNextClick}>
          Next
        </button>
      )}
    </div>
  );
}

export default SurveyPage;
