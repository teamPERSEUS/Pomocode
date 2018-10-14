import React from 'react';

const IssueChartView = ({ chartdata, item, display }) => {
  if (item.git_id !== undefined) {
    return <div id={item.git_id} />;
  }
};

export default IssueChartView;
