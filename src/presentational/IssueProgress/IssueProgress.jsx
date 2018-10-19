import React from 'react';
import IssueProgressView from './IssueProgressView';

class IssueProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { plannedIssues, getPlannedIssues } = this.props;
    return <IssueProgressView plannedIssues={plannedIssues} getPlannedIssues={getPlannedIssues} />;
  }
}
export default IssueProgress;
