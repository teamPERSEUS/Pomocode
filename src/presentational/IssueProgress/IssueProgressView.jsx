import React from 'react';
import IssueList from './IssueList/IssueList';

const IssueProgressView = ({ plannedIssues }) => (
  <div>
    <h2>IssueProgress</h2>
    <IssueList plannedIssues={plannedIssues} />
  </div>
);

export default IssueProgressView;
