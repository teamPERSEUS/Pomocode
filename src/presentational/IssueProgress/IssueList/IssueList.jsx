import React from 'react';
import IssueListView from './IssueListView';

class IssueList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: {
        repo: 'goonies',
        number: 22,
        title: 'add component that allows user to choose date range',
        daterange: '10/10/2018-10/11/2018',
        time: '4hrs 20min',
      },
    };
  }

  render() {
    const { issues } = this.state;
    const { plannedIssues } = this.props;
    return (
      <IssueListView plannedIssues={plannedIssues} />
    );
  }
}
export default IssueList;
