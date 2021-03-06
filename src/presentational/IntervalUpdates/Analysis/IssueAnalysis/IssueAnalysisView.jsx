import React from 'react';
import IssueInfoView from './IssueInfoView/IssueInfoView';
import IssueFeedbackView from './IssueFeedbackView/IssueFeedbackView';
import IssueChartView from './IssueChartView/IssueChartView';

const IssueAnalysisView = ({ item }) => (
  <div className="analysis-view">
    <IssueChartView item={item} />
    <IssueFeedbackView item={item} />
    <IssueInfoView item={item} />
  </div>
);

export default IssueAnalysisView;
