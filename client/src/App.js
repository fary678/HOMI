import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import SurveyIntro from './components/SurveyIntro'; // Ensure this path is correct
import SurveyPage from './components/SurveyPage';


// Home component (for the main page)
function Home() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/survey-intro'); // Navigate to the '/survey-intro' route
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">HOMI</div>
      </nav>
      <div className="hero">
        <h1>Find Your Home.</h1>
        <h2>Find Your Happy.</h2>
        <button className="cta-btn" onClick={handleStartClick}>Start Now</button>
      </div>
    </div>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/survey-intro" element={<SurveyIntro />} /> {/* Survey introduction page */}
        <Route path="/survey" element={<SurveyPage />} /> {/* Survey page */}
      </Routes>
    </Router>
  );
}

export default App;
