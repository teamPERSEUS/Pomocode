import React from 'react';
import FileTree from './FileTree';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header';
import IntervalUpdates from './IntervalUpdates/IntervalUpdates';
import IssueSelector from './IssueSelector/IssueSelector';
import IssueProgress from './IssueProgress/IssueProgress';
import MainChart from './MainChart/MainChart';
import SubChart from './SubChart/SubChart';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FileTree repos={this.props.repos} issues={this.props.issues} />
        <HomePage />
        <Header />
        <IntervalUpdates />
        <IssueSelector />
        <IssueProgress />
        <MainChart />
        <SubChart />
        
      </div>
    );
  }
}

export default Dashboard;
