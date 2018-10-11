import React from 'react';
import IssueChart from './IssueChart';

const IssueView = ({ issue }) => (
  <div>
    {issue.title}
    <IssueChart issue={issue} />
  </div>
);

export default IssueView;
