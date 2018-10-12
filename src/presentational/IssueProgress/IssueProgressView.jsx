import React from 'react';
import IssueList from './IssueList/IssueList';

const IssueProgressView = ({ plannedIssues }) => (
  <div className="issue-progress-container">
    <h3>Issues in Progress</h3>
    <IssueList plannedIssues={plannedIssues} />
  </div>
);

export default IssueProgressView;
