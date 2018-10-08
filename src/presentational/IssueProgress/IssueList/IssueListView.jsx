import React from 'react';
import Issue from './Issue/Issue';

const IssueListView = () => { 
  return (
    <div>
      {/* <div className="issue-list">
        {props.issues.map(issue =>
          <Issue
            issue={issue}
            key={issue.id.issueId}
          )};
      </div> */}
      <Issue />
      <Issue />
    </div>
  );
};

export default IssueListView;
