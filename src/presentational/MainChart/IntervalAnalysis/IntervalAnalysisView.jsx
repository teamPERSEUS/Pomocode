import React from 'react';
import IntervalInfoView from './IntervalInfoView/IntervalInfoView';
import IntervalFeedbackView from './IntervalFeedbackView/IntervalFeedbackView';
import IntervalChartView from './IntervalChartView/IntervalChartView';

const IntervalAnalysisView = ({ item }) => (
  <div>
    <IntervalChartView
      item={item}
    />
    <IntervalInfoView
      item={item}
    />
    <IntervalFeedbackView
      item={item}
    />
  </div>
);

export default IntervalAnalysisView;
