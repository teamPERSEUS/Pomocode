import React from 'react';
import IssueAnalysis from './IssueAnalysis/IssueAnalysis';
// import PieChart from '../../img/Pie.png';

const MainChartView = () => (
  <div className="main-chart">
    <h3>Issue Analysis</h3>
    <IssueAnalysis />
    {/* <img src={PieChart} style={{ width: 300, height: 300 }} /> */}
  </div>
);

export default MainChartView;
