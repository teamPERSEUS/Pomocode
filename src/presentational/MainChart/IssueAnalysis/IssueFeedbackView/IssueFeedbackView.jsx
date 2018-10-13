import React from 'react';

const IssueFeedbackView = ({ chardata, item, display }) => (
  <div>
    <h3>Issue Feedback</h3>
    { item }
    { display }
    { chardata }
  </div>
);

export default IssueFeedbackView;
