import React from 'react';

const FileTree = ({ repos, issues }) => (
  <div>
    <h2>Github File Tree</h2>
    <span>Repos</span>
    {' '}
    <select>
      {repos.map(repo => <option key={repo.id} value={repo.name}>{repo.name}</option>)}
    </select>
    <br />
    {'---------- ---------- ----------'}
    <h3>Issues</h3>
    {issues.map(issue => <p key={issue.id}>{issue.title}</p>)}
  </div>
);

export default FileTree;
