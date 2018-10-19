import React from 'react';
import IssueList from './IssueList/IssueList';

const IssueProgressView = ({ plannedIssues, getPlannedIssues }) => (
  <div className="issue-progress-container">
    <div className="issues-progress-title">
      <h3>Issues in Progress</h3>
    </div>
    <IssueList plannedIssues={plannedIssues} getPlannedIssues={getPlannedIssues} />
  </div>
);

export default IssueProgressView;
