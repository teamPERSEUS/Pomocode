import React from 'react';
import AnalysisView from './AnalysisView';

class Analysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user, analysisInfo } = this.props;
    return (
      <AnalysisView analysisInfo={analysisInfo} user={user} />
    );
  }
}
export default Analysis;
