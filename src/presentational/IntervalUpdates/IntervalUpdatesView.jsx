import React from 'react';
import IntervalList from './IntervalList/IntervalList';
import Interval from './Interval/Interval';

const IntervalUpdatesView = () => { 
  return (
    <div>
      <h2>IntervalUpdates</h2>
      <IntervalList />
      <Interval />
    </div>
  );
};

export default IntervalUpdatesView;
