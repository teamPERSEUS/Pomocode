import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Dashboard from './presentational/Dashboard';
import HomePage from './presentational/HomePage/HomePage';
import Header from './presentational/Header/Header';
import IntervalUpdates from './presentational/IntervalUpdates/IntervalUpdates';
import IssueSelector from './presentational/IssueSelector/IssueSelector';
import IssueProgress from './presentational/IssueProgress/IssueProgress';
import MainChart from './presentational/MainChart/MainChart';
import SubChart from './presentational/SubChart/SubChart';
import HistoricalTrends from './presentational/HistoricalTrends/HistoricalTrends';
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
          <Link to="/historicaltrends">Historical Trends</Link>
        </nav>
        <Router>
          <Dashboard path="/" repos={repos} issues={issues} />
          <HomePage path="/homepage" />
          <Header path="/header" />
          <IntervalUpdates path="/intervalupdates" />
          <IssueSelector path="/issueselector" />
          <IssueProgress path="/issueprogress" />
          <MainChart path="/mainchart" />
          <SubChart path="/subchart" />
          <HistoricalTrends path="/historicaltrends" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
