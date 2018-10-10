import React from 'react';
import IssueDesc from './IssueDesc/IssueDesc';

const IssueSelectorView = ({repos, issues, issueFilter, displayIssue, selectedIssue}) => { 
  return (
    <div>
      <h2>IssueSelector</h2>
      <div>
        <span>Repos</span>
        {' '}
        <select onChange={issueFilter}>
          <option>
            Select Repo
          </option>
          {repos.map(repo => <option key={repo.git_id} value={repo.name}>{repo.name}</option>)}
        </select>
        <br />
        <span>Issues</span>
        {' '}
        <select onChange={displayIssue}>
          <option>
            -----
          </option>
          {issues.map(issue => <option key={issue.git_id} value={issue.git_id}>{issue.title}</option>)}
        </select>
        <br />
        {'---------- ---------- ----------'}
      </div>
      <IssueDesc selectedIssue={selectedIssue} />
    </div>
  );
};

export default IssueSelectorView;
