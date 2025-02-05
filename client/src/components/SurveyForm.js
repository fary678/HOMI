import React from 'react';

const SurveyForm = () => {
    return (
        <form>
            <h2>Find Your Ideal Neighborhood</h2>
            <label>
                What is your budget?
                <input type="number" placeholder="Enter budget in USD" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SurveyForm;
