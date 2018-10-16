import React from 'react';

const IssueFeedbackView = ({ item }) => (
  <div>
    <h3>Issue Feedback</h3>
    <p>
      You have worked
      {' '}
      {item.hoursWorked}
      {' '}
      on this issue and your word count is
      {' '}
      {item.totalWordCount}
      .
    </p>
  </div>
);

export default IssueFeedbackView;
