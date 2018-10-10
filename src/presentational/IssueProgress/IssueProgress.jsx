import React from 'react';
import IssueProgressView from './IssueProgressView';

class IssueProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { plannedIssues } = this.props;
    return (
      <IssueProgressView plannedIssues={plannedIssues} />
    );
  }
}
export default IssueProgress;
