import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import Timer from './presentational/Timer';
import Test from './test';

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
          <Link to="/dashboard">Home</Link>
          <Link to="/fileTree">File Tree</Link>
          <Link to="/timer">Pomodoro Timer</Link>
          <Link to="/calender">Calendar</Link>
          <Link to="/plan">Plan</Link>
          <Link to="/intervalUpdates">Updates Per Interval</Link>
          <Link to="/dailyCharts">Daily Charts</Link>
          <Link to="/weeklyCharts">Weekly Charts</Link>
        </nav>
        <Router>
          <Timer path="/timer" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
