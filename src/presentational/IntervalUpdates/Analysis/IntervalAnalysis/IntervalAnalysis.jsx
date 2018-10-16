import React from 'react';
import c3 from 'c3';
import '../../../../../node_modules/c3/c3.css';
import axios from 'axios';
import IntervalAnalysisView from './IntervalAnalysisView';


class IntervalAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        xAxis: ['x', 'index.js', 'list.jsx', 'interval.jsx', 'main.css'],
        runningActive: ['Running(Active)', 3, 3, 4, 1],
        runningIdle: ['Running(Idle)', 3, 3, 4, 1],
        breakActive: ['Break(Active)', 1, 2, 3, 4],
        breakIdle: ['Break(Idle)', 2, 1, 4, 3],
        groups: [['Running(Active)', 'Running(Idle)'], ['Break(Active)', 'Break(Idle)']],
        intervalNum: 'Hi',
      },
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    this.getIssuesData();
  }

  // user this.props.user
  getIssuesData() {
    axios
      .get('http://localhost:4002/api/intervalDetails', {
        params: {
          intervalNum: 1,
          repoUrl: 'https://github.com/teamPERSEUS/Pomocode',
          user: 'fredricklou523',
        },
      })
      .then((response) => {
        console.log(response.data);
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
    c3.generate({
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
          label: 'Time(hrs)',
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
