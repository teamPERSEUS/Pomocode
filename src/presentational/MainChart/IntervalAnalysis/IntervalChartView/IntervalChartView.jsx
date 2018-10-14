import React from 'react';

const IntervalChartView = ({ item }) => {
  if (item.git_id !== undefined) {
    return <div id={item.git_id} />;
  }
  return null;
};

export default IntervalChartView;
