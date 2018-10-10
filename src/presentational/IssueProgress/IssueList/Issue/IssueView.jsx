import React from 'react';

const IssueView = ({ issue }) => (
  <div className="issue-entry">
    <div>
      Repo:
      {issue.reponame}
      <br />
      Issue Number:
      {issue.number}
      <br />
      Issue Title:
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
