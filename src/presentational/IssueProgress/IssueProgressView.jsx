import React from 'react';
import IssueList from './IssueList/IssueList';

const IssueProgressView = ({ plannedIssues, getPlannedIssues }) => (
  <div className="issue-progress-container">
<<<<<<< HEAD
    <div className="issues-progress-title">
      <h3>Issues in Progress</h3>
    </div>
    <IssueList plannedIssues={plannedIssues} />
=======
    <h3>Issues in Progress</h3>
    <IssueList plannedIssues={plannedIssues} getPlannedIssues={getPlannedIssues} />
>>>>>>> Added mark as complete, fixed initial rendering
  </div>
);

export default IssueProgressView;
