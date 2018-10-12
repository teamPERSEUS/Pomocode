import React from 'react';
import IssueDesc from './IssueDesc/IssueDesc';

const IssueSelectorView = ({ repos, issues, issueFilter, displayIssue, selectedIssue, getPlannedIssues }) => {
  return (
    <div className="issue-selector-container">
      <h3>Assigned Issues</h3>
      <select onChange={issueFilter}>
        <option>
          ----- Select Repo -----
        </option>
        {repos.map(repo => (
          <option key={repo.git_id} value={`${repo.owner}/${repo.name}`}>
            {`${repo.owner} / ${repo.name}`}
          </option>)
        )}
      </select>
      <br />
      <select onChange={displayIssue}>
        <option>
          ----- Select Issue -----
        </option>
        {issues.map(issue => (
          <option key={issue.git_id} value={issue.git_id}>
            {`#${issue.number}: ${issue.title}`}
          </option>)
        )}
      </select>
      <br />
      <br />
      <IssueDesc selectedIssue={selectedIssue} getPlannedIssues={getPlannedIssues} />
    </div>
  );
};

export default IssueSelectorView;
