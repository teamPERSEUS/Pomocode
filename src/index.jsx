import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Login from './presentational/Login/Login';
import HomePage from './presentational/HomePage/HomePage';
import Header from './presentational/Header/Header';
import HistoricalTrends from './presentational/HistoricalTrends/HistoricalTrends';

import './styles/main.css';

const serverPort = process.env.NODE_ENV !== 'production' ? 'http://localhost:1337' : '';

class App extends React.Component {
  constructor() {
    super();
    this._mounted = false;
    this.state = {
      loading: true,
      user: '',
      token: '',
      issues: [],
      plannedIssues: [],
      repos: [],
    };
    this.getIssues = this.getIssues.bind(this);
    this.getPlannedIssues = this.getPlannedIssues.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    this._mounted = true;

    axios.get(`${serverPort}/session`, { withCredentials: true }).then(({ data }) => {
      if (this._mounted) {
        if (data.token !== null) {
          this.setState({
            user: data.user,
            token: data.token,
          }, () => {
            this.getIssues();
            this.getPlannedIssues();
          });
        }
        this.setState({
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this._mounted = false;
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

  // get planned issues
  getPlannedIssues() {
    const { user } = this.state;
    axios
      .post('http://localhost:4000/api/plannedIssues', { user })
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

  // logout out of Pomocode
  logout() {
    axios.get(`${serverPort}/logout`, { withCredentials: true })
      .then(() => {
        this.setState({
          user: '',
          token: '',
        });
      })
      .catch((err) => {
        throw (err);
      });
  }

  renderHome() {
    const {
      user,
      repos,
      issues,
      plannedIssues,
    } = this.state;

    if (user === '') {
      return <Login loginURL={`${serverPort}/login`} />;
    }
    return (
      <div>
        <nav className="navBar" />
        <Router>
          <HomePage
            path="/"
            user={user}
            repos={repos}
            issues={issues}
            plannedIssues={plannedIssues}
            getPlannedIssues={this.getPlannedIssues}
          />
          <HistoricalTrends path="/historicaltrends" />
        </Router>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="app-container">
        <Header logout={this.logout} />
        {loading ? null : this.renderHome()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
