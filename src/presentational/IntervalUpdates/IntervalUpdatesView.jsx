import React from 'react';
import IntervalView from './Interval/IntervalView';

const IntervalUpdatesView = ({ intervals }) => (
  <div className="interval-updates-container">
    <h3>Interval Updates</h3>
    <div style={{ height: '300px', overflow: 'scroll', overflowX: 'hidden' }}>
      {intervals.map(interval => (
        <IntervalView interval={interval} key={interval.toString()} />
      ))}
    </div>
  </div>
);

export default IntervalUpdatesView;
