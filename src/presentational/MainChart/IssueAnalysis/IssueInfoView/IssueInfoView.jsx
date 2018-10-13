import React from 'react';

const IssueInfoView = ({ chardata, item, display }) => (
  <div>
    <h3>Issue Info</h3>
    { item }
    { display }
    { chardata }
  </div>
);

export default IssueInfoView;
