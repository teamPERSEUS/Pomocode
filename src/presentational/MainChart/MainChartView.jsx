import React from 'react';
import IssueAnalysis from './IssueAnalysis/IssueAnalysis';
import IntervalAnalysis from './IntervalAnalysis/IntervalAnalysis';
// import PieChart from '../../img/Pie.png';

const MainChartView = ({ user, analysisInfo }) => {
  console.log('User:', user);
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

export default MainChartView;
