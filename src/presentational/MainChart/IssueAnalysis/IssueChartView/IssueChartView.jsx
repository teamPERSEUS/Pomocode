import React from 'react';

const IssueChartView = ({ chardata, item, display }) => (
  <div>
    <h3>Issue Chart</h3>
    { item }
    { display }
    { chardata }
  </div>
);

export default IssueChartView;
