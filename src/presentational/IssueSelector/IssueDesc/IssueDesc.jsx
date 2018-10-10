import React from 'react';
import IssueDescView from './IssueDescView';

class IssueDesc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {selectedIssue} = this.props
    return (
      <IssueDescView selectedIssue={selectedIssue} />
    );
  }
}
export default IssueDesc;
