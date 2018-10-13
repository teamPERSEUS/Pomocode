import React from 'react';
import IssueInfoView from './IssueInfoView/IssueInfoView';
import IssueFeedbackView from './IssueFeedbackView/IssueFeedbackView';
import IssueChartView from './IssueChartView/IssueChartView';

const IssueAnalysisView = ({ chardata, item, display }) => (
  <div>
    <IssueChartView
      chardata={chardata}
      item={item}
      display={display}
    />
    <IssueInfoView
      chardata={chardata}
      item={item}
      display={display}
    />
    <IssueFeedbackView
      chardata={chardata}
      item={item}
      display={display}
    />
  </div>
);

export default IssueAnalysisView;
