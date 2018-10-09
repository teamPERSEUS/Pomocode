import React from 'react';
import IssueSelectorView from './IssueSelectorView';

class IssueSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRepo: '',
      selectedIssue: '',
      filteredIssues: [],
    };
    this.issueFilter = this.issueFilter.bind(this);
  }

  issueFilter(event) {
    const repo = event.target.value;
    const { issues } = this.props;
    let repoIssues = issues.filter((issue) => {
      return issue.reponame === repo;
    });
    this.setState({
      filteredIssues: repoIssues,
    });
  }


  render() {
    const { repos } = this.props;
    const { filteredIssues } = this.state;
    return (
      <IssueSelectorView repos={repos} issues={filteredIssues} issueFilter={this.issueFilter} />
    );
  }
}
export default IssueSelector;
