import React from 'react';
import Issue from './Issue/Issue';

const IssueListView = ({ plannedIssues }) => (
  <div>
    <h3>Issues in Progress</h3>
    <div className="issue-list">
      {plannedIssues.map(issue => (
        <Issue issue={issue} key={issue.git_id} />))
      }
    </div>
    {/* <Issue issues={plannedIssues[0]} /> */}
  </div>
);

export default IssueListView;
