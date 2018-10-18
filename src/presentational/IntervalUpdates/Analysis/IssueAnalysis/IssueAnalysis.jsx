import React from 'react';
import { generate } from 'c3';
import axios from 'axios';
import '../../../../../node_modules/c3/c3.css';
import IssueAnalysisView from './IssueAnalysisView';

const analyticsURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:4002' : 'https://pomocode-analytics.herokuapp.com';

class IssueAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        columns: [
          [
            'Date Interval',
            '10/18 Interval 1',
            '10/19 Interval 2',
            '10/20 Interval 5',
            '10/21 Interval 6',
          ],
          ['Active', 3, 8, 13, 25],
          ['Idle', 1, 2, 3, 4],
          ['WordCount', 2, 1, 4, 3],
          ['Plan', 20, 20, 20, 20],
        ],
        git_id: 'Hi',
        username: 'hellojohnny23',
        reponame: 'Periodic Table',
        number: 22,
        title: 'on click table displays more info on element',
        body:
          'clicking an element in the periodic table will render a description of that element and how it interacts with other elements',
        hoursWorked: '6hrs',
        totalWordCount: '876',
      },
      // git_id: '',
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    this.getIssuesData();
    // this.updateChart();
  }

  // user this.props.user, this.props.analysisInfo.identifier (git_id), this.props.analysisInfo.number
  getIssuesData() {
    const { user, analysisInfo } = this.props;
    axios
      .get(`${analyticsURL}/api/issueAnalysis`, {
        params: {
          git_id: analysisInfo.git_id,
          user,
        },
      })
      .then((response) => {
        console.log(response);
        this.setState(
          {
            item: response.data,
          },
          () => {
            this.updateChart();
          },
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateChart() {
    const bind = '#chart';
    const { item } = this.state;
    generate({
      bindto: bind,
      data: {
        x: 'Date Interval',
        columns: item.columns,
        groups: [['Idle', 'Active']],
        axes: {
          WordCount: 'y2',
        },
        types: {
          Active: 'bar',
          Idle: 'bar',
          WordCount: 'line',
          Plan: 'line',
        },
      },
      axis: {
        x: {
          type: 'category',
        },
        y2: {
          padding: { top: 500 },
          show: true,
        },
      },
      size: {},
    });
  }

  render() {
    const { item } = this.state;
    return <IssueAnalysisView item={item} />;
  }
}
export default IssueAnalysis;
