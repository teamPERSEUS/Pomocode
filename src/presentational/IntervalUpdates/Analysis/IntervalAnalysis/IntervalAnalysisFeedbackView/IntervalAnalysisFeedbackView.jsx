import React from 'react';

const IntervalAnalysisFeedbackView = ({ item }) => (
  <div>
    <h3>Interval Feedback</h3>
    <p>
      You have worked
      {' '}
      {item.hoursWorked}
      {' '}
      on this interval and your word count is
      {' '}
      {item.totalWordCount}
      .
    </p>
  </div>
);

export default IntervalAnalysisFeedbackView;
