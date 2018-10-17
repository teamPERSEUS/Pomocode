import React from 'react';
import IssueInfoView from './IssueInfoView/IssueInfoView';
import IssueFeedbackView from './IssueFeedbackView/IssueFeedbackView';
import IssueChartView from './IssueChartView/IssueChartView';

const IssueAnalysisView = ({ item }) => (
  <div>
    <IssueChartView
      item={item}
    />
    <IssueInfoView
      item={item}
    />
    <IssueFeedbackView
      item={item}
    />
  </div>
);

export default IssueAnalysisView;
