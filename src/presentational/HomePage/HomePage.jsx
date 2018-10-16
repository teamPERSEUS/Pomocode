import React from 'react';
import HomePageView from './HomePageView';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
 user, repos, issues, plannedIssues, getPlannedIssues 
} = this.props;
    return (
      <HomePageView user={user} repos={repos} issues={issues} plannedIssues={plannedIssues} getPlannedIssues={getPlannedIssues} />
    );
  }
}
export default HomePage;
