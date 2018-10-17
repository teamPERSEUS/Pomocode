import React from 'react';
import IntervalAnalysisInfoView from './IntervalAnalysisInfoView/IntervalAnalysisInfoView';
import IntervalAnalysisFeedbackView from './IntervalAnalysisFeedbackView/IntervalAnalysisFeedbackView';
import IntervalAnalysisChartView from './IntervalAnalysisChartView/IntervalAnalysisChartView';

const IntervalAnalysisView = ({ item }) => (
  <div>
    <IntervalAnalysisChartView />
    <IntervalAnalysisInfoView item={item} />
    <IntervalAnalysisFeedbackView item={item} />
  </div>
);

export default IntervalAnalysisView;
