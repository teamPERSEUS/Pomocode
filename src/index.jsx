import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import Timer from './presentational/Timer';
import FileTree from './presentational/FileTree';
import Dashboard from './presentational/Dashboard';
import Calendar from './presentational/Calendar';
import DailyCharts from './presentational/DailyCharts';
import IntervalUpdates from './presentational/IntervalUpdates';
import Planner from './presentational/Planner';
import WeeklyCharts from './presentational/WeeklyCharts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <h1 className="logo">PomoCode</h1>
        <h2 className="description">A pomodoro timer that enhances productivity</h2>
        <nav className="navBar">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/timer">Pomodoro Timer</Link>
          <Link to="/dailyCharts">Daily Charts</Link>
          <Link to="/weeklyCharts">Weekly Charts</Link>
        </nav>
        <Router>
          <Dashboard path="/dashboard" />
          <FileTree path="/fileTree" />
            <Timer path="/timer" />
            <Calendar path="/calender" />
            <Planner path="/plan" />
            <IntervalUpdates path="/intervalUpdates" />
          <DailyCharts path="/dailyCharts" />
            <WeeklyCharts path="/weeklyCharts" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
