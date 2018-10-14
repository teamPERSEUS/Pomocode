import React from 'react';
import IssueAnalysis from './IssueAnalysis/IssueAnalysis';
import IntervalAnalysis from './IntervalAnalysis/IntervalAnalysis';
// import PieChart from '../../img/Pie.png';

const MainChartView = () => (false ? (
  <div className="main-chart">
    <h3>Interval Analysis</h3>
    <IntervalAnalysis />
    {/* <img src={PieChart} style={{ width: 300, height: 300 }} /> */}
  </div>)
  : (
    <div className="main-chart">
      <h3>Interval Analysis</h3>
      <IntervalAnalysis />
      {/* <img src={PieChart} style={{ width: 300, height: 300 }} /> */}
    </div>)
);

export default MainChartView;
