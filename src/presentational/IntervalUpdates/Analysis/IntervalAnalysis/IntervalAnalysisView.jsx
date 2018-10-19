import React from 'react';
import IntervalAnalysisInfoView from './IntervalAnalysisInfoView/IntervalAnalysisInfoView';
import IntervalAnalysisFeedbackView from './IntervalAnalysisFeedbackView/IntervalAnalysisFeedbackView';
import IntervalAnalysisChartView from './IntervalAnalysisChartView/IntervalAnalysisChartView';

const IntervalAnalysisView = ({ item }) => (
  <div className="analysis-view">
    <IntervalAnalysisChartView />
    <IntervalAnalysisFeedbackView item={item} />
    <IntervalAnalysisInfoView item={item} />
  </div>
);

export default IntervalAnalysisView;
