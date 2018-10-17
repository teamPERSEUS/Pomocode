import React from 'react';
import IssueAnalysis from './IssueAnalysis/IssueAnalysis';
import IntervalAnalysis from './IntervalAnalysis/IntervalAnalysis';

const AnalysisView = ({ user, analysisInfo }) => {
  if (analysisInfo.type === 'Issue') {
    return (
      <div className="main-chart">
        <h3>Issue Analysis</h3>
        <IssueAnalysis user={user} analysisInfo={analysisInfo} />
      </div>);
  } if (analysisInfo.type === 'Interval') {
    return (
      <div className="main-chart">
        <h3>Interval Analysis</h3>
        <IntervalAnalysis user={user} analysisInfo={analysisInfo} />
      </div>);
  }
  return (
    <div>
      <h3>Analysis</h3>
    </div>);
};

export default AnalysisView;
