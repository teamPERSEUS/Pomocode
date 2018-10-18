import React from 'react';
import { generate } from 'c3';
import '../../../../../node_modules/c3/c3.css';
import axios from 'axios';
import IntervalAnalysisView from './IntervalAnalysisView';

const analyticsURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:4002' : 'https://pomocode-analytics.herokuapp.com';

class IntervalAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        columns: [
          ['fileName', 'index.js', 'list.jsx', 'interval.jsx', 'main.css'],
          ['Running(Active)', 3, 3, 4, 1],
          ['Running(Idle)', 3, 3, 4, 1],
          ['Break(Active)', 1, 2, 3, 4],
          ['Break(Idle)', 2, 1, 4, 3],
        ],
        groups: [['Running(Active)', 'Running(Idle)'], ['Break(Active)', 'Break(Idle)']],
        intervalNum: 'Hi',
        reponame: 'Pomocode',
        wordCount: 425,
        idleTime: 30,
        mostActive: 'index.jsx',
        feedback: "Looks like you're spending your time wisely. Keep it up!",
      },
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    this.getIssuesData();
    // this.updateChart();
  }

  // this.props.user, this.props.analysisInfo.identifier (repoUrl), this.props.analysisInfo.number
  getIssuesData() {
    const { user, analysisInfo } = this.props;
    axios
      .get(`${analyticsURL}/api/intervalDetails`, {
        params: {
          intervalNum: analysisInfo.number,
          repoUrl: analysisInfo.identifier,
          user,
        },
      })
      .then((response) => {
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
    const { item } = this.state;
    generate({
      bindto: '#chart',
      data: {
        x: 'fileName',
        columns: item.columns,
        type: 'bar',
        groups: item.groups,
      },
      axis: {
        x: {
          type: 'category',
        },
        y: {
          label: 'Time(minutes)',
        },
      },
      bar: {
        width: {
          ratio: 0.5,
        },
      },
    });
  }

  render() {
    const { item } = this.state;
    return <IntervalAnalysisView item={item} />;
  }
}
export default IntervalAnalysis;
