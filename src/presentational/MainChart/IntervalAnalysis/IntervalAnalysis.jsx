import React from 'react';
import c3 from 'c3';
import '../../../../node_modules/c3/c3.css';
import IntervalAnalysisView from './IntervalAnalysisView';

// const axios = require('axios');

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
        groups: [
          ['Running(Active)', 'Running(Idle)'],
          ['Break(Active)', 'Break(Idle)'],
        ],
        git_id: 'Hi',
        username: 'hellojohnny23',
        reponame: 'Periodic Table',
        number: 22,
        title: 'on click table displays more info on element',
        body: 'clicking an element in the periodic table will render a description of that element and how it interacts with other elements',
        hoursWorked: '6hrs',
        totalWordCount: '876',
      },
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    // this.getIssuesData();
    this.updateChart();
  }

  // getIssuesData() {
  //   axios.get(`http://localhost:4002/api/intervalAnalysis?git_id=${this.state.git_id}`)
  //     .then(function (response) {
  //       console.log(response)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }

  updateChart() {
    const { item } = this.state;
    if (item.git_id !== undefined) {
      const bind = `#${item.git_id}`;
      const columns = Object.keys(item).reduce((acc, key) => {
        if (key !== 'groups' && Array.isArray(item[key])) {
          acc.push(item[key]);
        }
        return acc;
      }, []);
      c3.generate({
        bindto: bind,
        data: {
          x: 'x',
          columns,
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
  }

  render() {
    const { item } = this.state;
    return <IntervalAnalysisView item={item} />;
  }
}
export default IntervalAnalysis;
