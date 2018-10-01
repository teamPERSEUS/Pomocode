import React from 'react';
import FileTree from './FileTree';
import Timer from './Timer';
import Calendar from './Calendar';
import Planner from './Planner';
import IntervalUpdates from './IntervalUpdates';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        DashboardTest
        <FileTree />
        <Timer />
        <Calendar />
        <Planner />
        <IntervalUpdates />
      </div>
    );
  }
}

export default Dashboard;
