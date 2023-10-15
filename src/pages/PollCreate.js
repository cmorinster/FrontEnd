import React from 'react';
import '../styling/PollCreate.css';

const PollCreate = () => {
  // Assuming the user's selected days and times are stored in arrays
  const selectedDays = ["Monday", "Tuesday", "Wednesday"];
  const selectedTimes = ["10:00 AM", "1:00 PM", "3:00 PM"];

  return (
    <div className="finished-poll-page">
      <h2>Let's create your poll!</h2>
      <div className="poll-options">
        <h3>Selected Days:</h3>
        <ul>
          {selectedDays.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
        <h3>Selected Times:</h3>
        <ul>
          {selectedTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PollCreate;
