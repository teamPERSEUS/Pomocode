import React from 'react';
import HomePageView from './HomePageView';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { repos, issues } = this.props;
    return (
      <HomePageView repos={repos} issues={issues} />
    );
  }
}
export default HomePage;
