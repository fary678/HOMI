import React from 'react';
import './App.css';
import SurveyForm from './components/SurveyForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Homi</h1>
                <p>Your personalized neighborhood finder.</p>
            </header>
            <SurveyForm />
        </div>
    );
}

export default App;
