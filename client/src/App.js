import React from 'react';
import './App.css';
import SurveyForm from './components/SurveyForm';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">HOMI</div>
      </nav>
      <div className="hero">
        <h1>Find Your Home.</h1>
        <h2>Find Your Happy.</h2>
        <button className="cta-btn">Start Now</button>
      </div>
    </div>
  );
}

export default App;