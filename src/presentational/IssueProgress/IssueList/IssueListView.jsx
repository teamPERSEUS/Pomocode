import React from 'react';
import Issue from './Issue/Issue';

const IssueListView = ( {issues} ) => { 
  return (
    <div>
      <h3>Issues in Progress</h3>
      {/* <div className="issue-list">
        {props.issues.map(issue =>
          <Issue
            issue={issue}
            key={issue.id.issueId}
          )};
      </div> */}
      <Issue issues={issues} />
    </div>
  );
};

export default IssueListView;
