import React from 'react';
import PieChart from '../../img/Pie.png';

const MainChartView = () => (
  <div className="main-chart">
    <h3>Issue/Interval Analysis</h3>

    <img src={PieChart} style={{ width: 300, height: 300 }} />
  </div>
);

export default MainChartView;
