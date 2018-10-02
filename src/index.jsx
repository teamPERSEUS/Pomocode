import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Timer from './presentational/Timer';
import FileTree from './presentational/FileTree';
import Dashboard from './presentational/Dashboard';
import Calendar from './presentational/Calendar';
import DailyCharts from './presentational/DailyCharts';
import IntervalUpdates from './presentational/IntervalUpdates';
import Planner from './presentational/Planner';
import WeeklyCharts from './presentational/WeeklyCharts';
import queries from '../utils/queries';

const serverPort = 'http://localhost:1337';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    axios.get(`${serverPort}/session`, { withCredentials: true }).then(({ data }) => {
      console.log('Data token:', data.token);
      if (data.token !== null) {
        this.setState({
          token: data.token,
        });
      }
    });
  }

  // example GitHub Query: retrieve array of repositories
  getRepos(query) {
    const { token } = this.state;
    axios
      .post(`${serverPort}/query`, { token, query }, { withCredentials: true })
      .then(({ data }) => {
        console.log(data.data.viewer.repositories.nodes);
      });
  }

  render() {
    // line 48 is to test GitHub API Query functionality
    const { token } = this.state;
    return (
      <div className="header">
        <h1 className="logo">PomoCode</h1>
        <a href={`${serverPort}/login`}> Login </a>
        {token !== '' ? this.getRepos(queries.repoNames) : null}
        <h2 className="description">A pomodoro timer that enhances productivity</h2>
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/timer">Pomodoro Timer</Link>
          <Link to="/dailyCharts">Daily Charts</Link>
          <Link to="/weeklyCharts">Weekly Charts</Link>
        </nav>
        <Router>
          <Dashboard path="/" />
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
