import React from 'react';
import HomePageView from './HomePageView';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { repos, issues, plannedIssues } = this.props;
    return (
      <HomePageView repos={repos} issues={issues} plannedIssues={plannedIssues} />
    );
  }
}
export default HomePage;
