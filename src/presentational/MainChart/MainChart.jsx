import React from 'react';
import MainChartView from './MainChartView';

class MainChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, analysisInfo } = this.props;
    return (
      <MainChartView analysisInfo={analysisInfo} user={user} />
    );
  }
}
export default MainChart;
