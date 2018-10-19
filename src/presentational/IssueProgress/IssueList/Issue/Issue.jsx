import React from 'react';
import Axios from 'axios';
import IssueView from './IssueView';

const plannerURL = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:4000'
  : 'https://pomocode-planner.herokuapp.com';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.completeItem = this.completeItem.bind(this);
  }

  completeItem(username, git_id) {
    const { getPlannedIssues } = this.props;
    Axios.put(`${plannerURL}/complete`, { username, git_id })
      .then(() => {
        getPlannedIssues();
      })
      .catch(err => console.log(err));
  }

  render() {
    const { issue } = this.props;
    return <IssueView issue={issue} completeItem={this.completeItem} />;
  }
}
export default Issue;
