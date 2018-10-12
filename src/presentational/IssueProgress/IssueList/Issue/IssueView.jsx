import React from 'react';

const IssueView = ({ issue }) => (
  <div className="issue-in-progress-entry">
    <div>
      {issue.reponame}
      <strong>{` #${issue.number}:`}</strong>
      <br />
      {issue.title}
      <br />
      Start Date:
      {issue.estimate_start_date}
      End Date:
      {issue.estimate_end_date}
      <br />
      Time Allotted:
      {issue.estimate_time}
    </div>
  </div>
);

export default IssueView;
