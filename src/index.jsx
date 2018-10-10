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
      plannedIssues: [],
      repos: [],
    };
    this.getIssues = this.getIssues.bind(this);
    this.getPlannedIssues = this.getPlannedIssues.bind(this);
  }

  componentDidMount() {
    axios.get(`${serverPort}/session`, { withCredentials: true }).then(({ data }) => {
      if (data.token !== null) {
        this.setState({
          user: data.user,
          token: data.token,
        }, () => {
          this.getIssues();
          this.getPlannedIssues();
        });
      }
    });
  }

  // retrieve issues and repos from service
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

  getPlannedIssues() {
    const { user } = this.state;
    axios
      .get('http://localhost:4000/getPlannedIssues', { params: { user } })
      .then(({ data }) => {
        this.setState({
          plannedIssues: data,
        });
      })
      .catch((err) => {
        console.log('Problem retrieving github data:', err);
        throw (err);
      });
  }

  render() {
    const { repos, issues, plannedIssues } = this.state;
    return (
      <div className="header">
        <Header />
        <a href={`${serverPort}/login`}> Login </a>
        <nav className="navBar">
          <Link to="/">Home</Link>
          <Link to="/historicaltrends">Historical Trends</Link>
        </nav>
        <Router>
          <HomePage path="/" repos={repos} issues={issues} plannedIssues={plannedIssues} />
          <HistoricalTrends path="/historicaltrends" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
