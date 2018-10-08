import React from 'react';
import Interval from './Interval/Interval';

const IntervalListView = () => { 
  return (
    <div>
      {/* <div className="interval-list">
        {props.intervals.map(interval =>
          <Interval
            interval={interval}
            key={interval.id.intervalId}
          )};
      </div> */}
      <Interval />
      <Interval />
    </div>
  );
};

export default IntervalListView;
