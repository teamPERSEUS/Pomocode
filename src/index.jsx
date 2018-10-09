import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import HomePage from './presentational/HomePage/HomePage';
import Header from './presentational/Header/Header';
import IntervalUpdates from './presentational/IntervalUpdates/IntervalUpdates';
import IssueSelector from './presentational/IssueSelector/IssueSelector';
import IssueProgress from './presentational/IssueProgress/IssueProgress';
import MainChart from './presentational/MainChart/MainChart';
import SubChart from './presentational/SubChart/SubChart';
import HistoricalTrends from './presentational/HistoricalTrends/HistoricalTrends';

const serverPort = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337' : '';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
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
          user: data.user,
          token: data.token,
        }, () => {
          this.getIssues();
        });
      }
    });
  }

  // example GitHub Query: retrieve array of issues
  getIssues() {
    const { token, user } = this.state;
    axios
      .post('http://localhost:4000/refreshGitData', { token, user })
      .then(({ data }) => {
        this.setState({
          issues: data.issues,
          repos: data.repos,
        });
      })
      .catch((err) => {
        console.log('Problem retrieving github data:', err);
        throw (err);
      });
  }

  render() {
    // the 2 array map calls are just to test if the repos and issues are saved in state.
    const { repos, issues } = this.state;
    return (
      <div className="header">
        <Header />
        <a href={`${serverPort}/login`}> Login </a>
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/historicaltrends">Historical Trends</Link>
        </nav>
        <Router>
          <HomePage path="/" repos={repos} issues={issues} />
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
