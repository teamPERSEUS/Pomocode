import React from 'react';
import IssueView from './IssueView';

const IssueListView = ({ issues }) => (
  <div style={{ height: '300px', overflow: 'scroll', overflowX: 'hidden' }}>
    {issues.map(issue => (
      <IssueView issue={issue} key={issue.toString()} />
    ))}
  </div>
);

export default IssueListView;
