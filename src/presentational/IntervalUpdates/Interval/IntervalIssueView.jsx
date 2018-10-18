import React from 'react';
import IntervalChart from './IntervalChart/IntervalChart';

const IntervalIssueView = ({ issue, getAnalysis }) => (
  <div>
    <div>{issue.intervalNum}</div>
    <IntervalChart issue={issue} getAnalysis={getAnalysis} />
  </div>
);

export default IntervalIssueView;
