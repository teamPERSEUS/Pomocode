import React from 'react';
import IssueView from './IssueView';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: {
        repo: 'goonies',
        number: 22,
        title: 'add component that allows user to choose date range',
        daterange: '10/10-10/11',
        time: '4hrs 20min',
      },
    };
  }

  render() {
    const { issues } = this.state;
    return (
      <IssueView issues={issues} />
    );
  }
}
export default Issue;
