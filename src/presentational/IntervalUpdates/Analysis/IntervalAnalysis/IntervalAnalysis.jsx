import React from 'react';
import { generate } from 'c3';
import '../../../../../node_modules/c3/c3.css';
import axios from 'axios';
import IntervalAnalysisView from './IntervalAnalysisView';

const analyticsURL = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:4002'
  : 'https://pomocode-analytics.herokuapp.com';

class IntervalAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        columns: [
          ['fileName', 'HistoricalTrendsView.jsx', 'App.jsx.jsx', 'Charts.jsx'],
          ['Running(Active)', 753, 1337, 2965],
          ['Running(Idle)', 76, 288, 420],
          ['Break(Active)', 265, 423, 601],
          ['Break(Idle)', 197, 137, 185],
        ],
        groups: [['Running(Active)', 'Running(Idle)'], ['Break(Active)', 'Break(Idle)']],
        reponame: 'Pomocode',
        wordCount: 1189,
        idleTime: 1303,
        mostActive: 'Charts.jsx',
        feedback: "Looks like you've spent your interval wisely, yodaMan!",
        intervalNum: '2',
      },
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    this.getIssuesData();
    this.updateChart();
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
        // console.log(response.data);
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
        order: 'asc',
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
