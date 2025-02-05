import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Adjust path based on your structure

function SurveyIntro() {
  const navigate = useNavigate();

  const handleBeginSurveyClick = () => {
    navigate('/survey'); // Navigate to the survey page
  };

  return (
    <div className="survey-intro">
      <h1>Let Your Home Find You</h1>
      <p>Take a quick survey to personalize your experience and find your dream neighborhood.</p>
      <button className="cta-btn" onClick={handleBeginSurveyClick}>Begin Survey</button>
    </div>
  );
}

export default SurveyIntro;
