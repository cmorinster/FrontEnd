import React from 'react';
import '../styling/PollPageDays.css';

const PollPageDays = () => {
  return (
    <div className="poll-page">
      <div className="modal">
        <h2>Let's start with some days</h2>
        <div className="modal-content">
          <form>
            <br />
            <label htmlFor="question">Question: Which day works best?</label><br />
            <label htmlFor="days">Options:</label><br />
            <input type="text" id="days" name="days" placeholder="e.g., Monday, Tuesday, Wednesday" /><br />
            
            <div className="allow-multiple-answers">
              <input type="checkbox" id="allowMultipleAnswers" name="allowMultipleAnswers" />
              <label htmlFor="allowMultipleAnswers" className="checkbox-label">Allow Multiple Answers</label>
            </div>
          </form>
        </div>
        <div className="button-container">
              <button type="button" className="back-button">Back</button>
              <button type="submit" className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PollPageDays;
