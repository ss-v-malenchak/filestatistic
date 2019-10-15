import React from 'react';

const FeedbackForm = () => {
  return(
    <div className="feedback-first-rect">
      <div className="feedback-second-rect">
        <h1>Feedback</h1>
        <form method="POST" action="https://formspree.io/ss.v.malenchak@gmail.com">
          <div className="input-group">
            <label for="feedback-name">Name:</label>
            <input id="feedback-name" type="text" name="firstname" placeholder="Name" />
          </div>
          <div className="input-group">
            <label for="feedback-email">Email:</label>
            <input id="feedback-email" type="text" name="firstname" placeholder="Name" />
          </div>
          <div className="input-group">
            <label for="feedback-message">Message:</label>
            <textarea id="feedback-message" rows="10" cols="25" name="text" placeholder="Message" />
          </div>
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
          </form>
        </div>
    </div>
  );
};

export default FeedbackForm;
