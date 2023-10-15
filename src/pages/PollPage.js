import React from 'react';
import '../styling/PollPage.css';

const PollPage = () => {
  return (
    <div className="poll-page">
      <div className="modal">
      <h2>Poll Details</h2>
        <div className="modal-content">
          <form>
            <br />
            <input type="text" id="name" name="name" placeholder="Your Name*" /><br />
            <input type="email" id="email" name="email" placeholder="Your Email*" /><br />
            <input type="text" id="poll-title" name="poll-title" placeholder="Poll Title*" /><br />
            <textarea id="event-description" name="event-description" rows="4" cols="50" placeholder="Event Description (optional)"></textarea><br />
          </form>
        </div>
        <button type="submit">Next</button>

      </div>
    </div>
  );
};

export default PollPage;
