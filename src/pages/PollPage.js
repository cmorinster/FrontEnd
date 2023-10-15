import React, { useState } from 'react';
import '../styling/PollPage.css';

const PollPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="poll-page">
      <h2>Create a Poll</h2>
      <button onClick={openModal}>Next</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <form>
              <label for="name">Name:</label><br />
              <input type="text" id="name" name="name" /><br />
              <label for="email">Email:</label><br />
              <input type="email" id="email" name="email" /><br />
              <label for="poll-title">Poll Title:</label><br />
              <input type="text" id="poll-title" name="poll-title" /><br />
              <label for="event-description">Event Description:</label><br />
              <textarea id="event-description" name="event-description" rows="4" cols="50"></textarea><br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PollPage;
