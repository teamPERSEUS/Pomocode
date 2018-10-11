import React from 'react';
import IssueListView from './IssueListView';

class IssueList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { plannedIssues } = this.props;
    return (
      <IssueListView plannedIssues={plannedIssues} />
    );
  }
}
export default IssueList;
