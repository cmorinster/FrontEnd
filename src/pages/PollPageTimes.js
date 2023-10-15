import React from 'react';
import '../styling/PollPageTimes.css';

const PollPageTimes = () => {
  // Assuming the user's selected days are stored in an array called selectedDays
  const selectedDays = ["Monday", "Tuesday", "Wednesday"];

  return (
    <div className="poll-page">
    {/**TODO: Separate into different modals */}
      <div className="modal">
        <h2>Nice! Now let's add some times</h2>
        <div className="modal-content">
          {selectedDays.map((day, index) => (
            <form key={index}>
              <br />
              <label htmlFor={`time-${day}`}>Time for {day}:</label><br />
              <input type="text" id={`time-${day}`} name={`time-${day}`} placeholder="Enter specific time" /><br />
            </form>
          ))}
          <div className="allow-multiple-answers">
            <input type="checkbox" id="allowMultipleAnswers" name="allowMultipleAnswers" />
            <label htmlFor="allowMultipleAnswers" className="checkbox-label">Allow Multiple Answers</label>
          </div>
        </div>
        <div className="button-container">
          <button type="button" className="back-button">Back</button>
          <button type="submit" className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default PollPageTimes;
