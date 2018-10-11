import React from 'react';
import IssueListView from './IssueListView';

class IssueProgress extends React.Component {
  constructor() {
    super();
    this.state = ['test1', 'test2', 'test3', 'test4', 'test5'];
  }

  render() {
    return <IssueListView issues={this.state} />;
  }
}
export default IssueProgress;
