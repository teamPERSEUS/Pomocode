import React from 'react';
import IssueDesc from './IssueDesc/IssueDesc';

const IssueSelectorView = () => { 
  return (
    <div>
      <h2>IssueSelector</h2>
      <div>
        <span>Repos</span>
        {' '}
        <select>
        </select>
        <br />
        <span>Issues</span>
        {' '}
        <select>
        </select>
        <br />
        {'---------- ---------- ----------'}
      </div>
      <IssueDesc />
    </div>
  );
};

export default IssueSelectorView;
