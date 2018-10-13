import React from 'react';
import IssueInfoView from './IssueInfoView/IssueInfoView';
import IssueFeedbackView from './IssueFeedbackView/IssueFeedbackView';
import IssueChartView from './IssueChartView/IssueChartView';

const IssueAnalysisView = () => (
  <div>
    <IssueChartView />
    <IssueInfoView />
    <IssueFeedbackView />
  </div>
);

export default IssueAnalysisView;
