import React from 'react';
import FeedbackForm from './FeedbackForm';

const FeedbackPage = () => {
  return(
    <div id="feedback-page">
      <div className="feedback-page-background-image"></div>
        <div className="feedback-field">
          <FeedbackForm />
        </div>
    </div>
  );
};

export default FeedbackPage;
