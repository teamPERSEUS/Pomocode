import React from 'react';
import IssueAnalysisView from './IssueAnalysisView';

class IssueAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chardata: [[1], [2]],
      item: { username: 'testrepo 1' },
      display: 'testrepo2',
    };
  }

  render() {
    const { chardata, item, display } = this.state;
    return (
      <IssueAnalysisView
        chardata={chardata}
        item={item.username}
        display={display}
      />
    );
  }
}
export default IssueAnalysis;
