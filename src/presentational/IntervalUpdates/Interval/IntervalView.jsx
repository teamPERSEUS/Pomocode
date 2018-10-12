import React from 'react';
import IntervalChart from './IntervalChart/IntervalChart';

const IntervalView = ({ interval }) => (
  <div className="interval">
    {interval.title}
    <IntervalChart interval={interval} />
  </div>
);

export default IntervalView;
