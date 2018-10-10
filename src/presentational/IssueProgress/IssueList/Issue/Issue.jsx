import React from 'react';
import IssueView from './IssueView';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { issue } = this.props;
    return (
      <IssueView issue={issue} />
    );
  }
}
export default Issue;
