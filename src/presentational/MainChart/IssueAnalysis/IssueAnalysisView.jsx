import React from 'react';
import IssueInfoView from './IssueInfoView/IssueInfoView';
import IssueFeedbackView from './IssueFeedbackView/IssueFeedbackView';
import IssueChartView from './IssueChartView/IssueChartView';

const IssueAnalysisView = ({ chartdata, item, display }) => (
  <div>
    <IssueChartView
      chartdata={chartdata}
      item={item}
      display={display}
    />
    <IssueInfoView
      chartdata={chartdata}
      item={item}
      display={display}
    />
    <IssueFeedbackView
      chartdata={chartdata}
      item={item}
      display={display}
    />
  </div>
);

export default IssueAnalysisView;
