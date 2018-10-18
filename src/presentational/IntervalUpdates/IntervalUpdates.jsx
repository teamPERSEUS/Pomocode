import React from 'react';
import Axios from 'axios';
import IntervalUpdatesView from './IntervalUpdatesView';

const analyticsURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:4002' : 'https://pomocode-analytics.herokuapp.com';

class IntervalUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervals: [
        {
          issue1: {
            columns: [['Plan', 8.5], ['Time', 4], ['IntervalTime', 0.5]],
            groups: [['Time', 'IntervalTime']],
            issueName: 'Issue No.1',
            git_id: 'blah=',
            repo_url: 'blah.com',
            repoName: 'blah/blah',
            intervalNum: 3,
            number: 1,
          },
          issue2: {
            columns: [['Plan', 6], ['Time', 5], ['IntervalTime', 0.5]],
            groups: [['Time', 'IntervalTime']],
            issueName: 'Issue No.2',
            git_id: 'blah2=',
            repo_url: 'blah2.com',
            repoName: 'blah2/blah2',
            intervalNum: 3,
            number: 2,
          },
        },
        {
          issue1: {
            columns: [['Plan', 8.5], ['Time', 3], ['IntervalTime', 1]],
            groups: [['Time', 'IntervalTime']],
            issueName: 'Issue No.1',
            git_id: 'blah=',
            repo_url: 'blah.com',
            repoName: 'blah/blah',
            intervalNum: 2,
            number: 1,
          },
        },
        {
          issue1: {
            columns: [['Plan', 8.5], ['Time', 1.5], ['IntervalTime', 1.5]],
            groups: [['Time', 'IntervalTime']],
            issueName: 'Issue No.1',
            git_id: 'blah=',
            repo_url: 'blah.com',
            repoName: 'blah/blah',
            intervalNum: 1,
            number: 1,
          },
          issue2: {
            columns: [['Plan', 6], ['Time', 3], ['IntervalTime', 2]],
            groups: [['Time', 'IntervalTime']],
            issueName: 'Issue No.2',
            git_id: 'blah2=',
            repo_url: 'blah2.com',
            repoName: 'blah2/blah2',
            intervalNum: 1,
            number: 2,
          },
          issue3: {
            columns: [['Plan', 4], ['Time', 0], ['IntervalTime', 3]],
            groups: [['Time', 'IntervalTime']],
            issueName: 'Issue No.3',
            git_id: 'blah3=',
            repo_url: 'blah3.com',
            repoName: 'blah3/blah3',
            intervalNum: 1,
            number: 3,
          },
        },
      ],
      analysisInfo: {
        type: null,
        number: null,
        category: 'Files',
        identifier: '',
      },
    };

    this.getIntervalUpdates = this.getIntervalUpdates.bind(this);
    this.getAnalysis = this.getAnalysis.bind(this);
  }

  componentDidMount() {
    this.getIntervalUpdates();
  }

  getIntervalUpdates() {
    const { user } = this.props;

    Axios.get(`${analyticsURL}/api/intervalUpdates`, {
      params: {
        userName: user,
      },
    })
      .then((response) => {
        this.setState({
          intervals: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // .then retreive info and set this state;
    this.setState({
      analysisInfo: {
        type: 'Interval',
        number: 4,
        identifier: 'blah/blah.cm',
      },
    });
  }

  getAnalysis(type, number, identifier) {
    this.setState({
      analysisInfo: {
        type,
        number,
        identifier,
      },
    });
  }

  render() {
    const { intervals, analysisInfo } = this.state;
    const { user } = this.props;
    return (
      <IntervalUpdatesView
        user={user}
        intervals={intervals}
        analysisInfo={analysisInfo}
        getAnalysis={this.getAnalysis}
      />
    );
  }
}
export default IntervalUpdates;
