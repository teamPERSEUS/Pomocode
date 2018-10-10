import React from 'react';

const IssueView = ({ issues }) => { 
  return (
    <div className="issue-entry">
      <div>
        Repo:
        {issues.repo}
        <br />
        Issue Number:
        {issues.number}
        <br />
        Issue Title:
        {issues.title}
        <br />
        Date Range:
        {issues.daterange}
        <br />
        Time Allotted:
        {issues.time}
      </div>
    </div>
  );
};

export default IssueView;
