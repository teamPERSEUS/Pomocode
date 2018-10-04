import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Timer from './presentational/Timer';
import Dashboard from './presentational/Dashboard';
import DailyCharts from './presentational/DailyCharts';
import WeeklyCharts from './presentational/WeeklyCharts';
import Dropdown from './presentational/Dropdown';
import queries from '../utils/queries';

const serverPort = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337' : '';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: '',
      issues: [],
      repos: [],
    };

    this.getIssues = this.getIssues.bind(this);
  }

  componentDidMount() {
    axios.get(`${serverPort}/session`, { withCredentials: true }).then(({ data }) => {
      if (data.token !== null) {
        this.setState({
          token: data.token,
        }, () => {
          this.getRepos();
          this.getIssues();
        });
      }
    });
  }

  // example GitHub Query: retrieve array of repositories
  getRepos() {
    const { token } = this.state;
    axios
      .post(`${serverPort}/query`, { token, query: queries.repoNames }, { withCredentials: true })
      .then(({ data }) => {
        this.setState({
          repos: data.viewer.repositories.nodes,
        });
      });
  }

  // example GitHub Query: retrieve array of issues
  getIssues() {
    const { token } = this.state;
    axios
      .post(`${serverPort}/query`, { token, query: queries.issues }, { withCredentials: true })
      .then(({ data }) => {
        this.setState({
          issues: data.viewer.issues.nodes,
        });
      });
  }

  render() {
    // the 2 array map calls are just to test if the repos and issues are saved in state.
    const { repos, issues } = this.state;
    return (
      <div className="header">
        <h1 className="logo">PomoCode</h1>
        <a href={`${serverPort}/login`}> Login </a>
        <h2 className="description">A pomodoro timer that enhances productivity</h2>
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/timer">Pomodoro Timer</Link>
          <Link to="/dailyCharts">Daily Charts</Link>
          <Link to="/weeklyCharts">Weekly Charts</Link>
        </nav>
        <Router>
          <Dashboard path="/" repos={repos} issues={issues} />
          <Timer path="/timer" />
          <DailyCharts path="/dailyCharts" />
          <WeeklyCharts path="/weeklyCharts" />
          <Dropdown path="/dropdown" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
