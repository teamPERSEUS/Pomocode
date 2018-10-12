import React from 'react';
import IssueSelectorView from './IssueSelectorView';

class IssueSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIssue: {},
      filteredIssues: [],
    };
    this.issueFilter = this.issueFilter.bind(this);
    this.displayIssue = this.displayIssue.bind(this);
  }

  issueFilter(event) {
    const repo = event.target.value;
    const { issues } = this.props;
    const repoIssues = issues.filter((issue) => {
      return `${issue.organization}/${issue.reponame}` === repo;
    });
    this.setState({
      filteredIssues: repoIssues,
      selectedIssue: {},
    });
  }

  displayIssue(event) {
    const git_id = event.target.value;
    const issue = this.state.filteredIssues.reduce((acc, item) => {
      if (item.git_id === git_id) {
        acc = item;
      }
      return acc;
    }, {});
    this.setState({
      selectedIssue: issue,
    });
  }

  render() {
    const { repos, getPlannedIssues } = this.props;
    const { filteredIssues, selectedIssue } = this.state;
    return (
      <IssueSelectorView
        repos={repos}
        issues={filteredIssues}
        selectedIssue={selectedIssue}
        issueFilter={this.issueFilter}
        displayIssue={this.displayIssue}
        getPlannedIssues={getPlannedIssues}
      />
    );
  }
}
export default IssueSelector;
