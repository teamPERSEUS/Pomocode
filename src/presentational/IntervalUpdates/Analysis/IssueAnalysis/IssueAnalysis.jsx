import React from 'react';
import c3 from 'c3';
import '../../../../../node_modules/c3/c3.css';
import { array } from 'prop-types';
import IssueAnalysisView from './IssueAnalysisView';

// const axios = require('axios');

class IssueAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        running: ['Running', 3, 3, 4, 1],
        break: ['Break', 1, 2, 3, 4],
        wordcount: ['WordCount', 2, 1, 4, 3],
        git_id: 'Hi',
        username: 'hellojohnny23',
        reponame: 'Periodic Table',
        number: 22,
        title: 'on click table displays more info on element',
        body: 'clicking an element in the periodic table will render a description of that element and how it interacts with other elements',
        hoursWorked: '6hrs',
        totalWordCount: '876',
      },
      // git_id: '',
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    // this.getIssuesData();
    this.updateChart();
  }

  // user this.props.user, this.props.analysisInfo.identifier (git_id), this.props.analysisInfo.number
  // getIssuesData() {
  //   axios.get(`http://localhost:4002/api/issueAnalysis?git_id=${this.state.git_id}`)
  //     .then(function (response) {
  //       console.log(response)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }

  updateChart() {
    if (this.state.item.git_id !== undefined) {
      const bind = `#${this.state.item.git_id}`;
      c3.generate({
        bindto: bind,
        data: {
          x: 'x',
          columns: [
            ['x', 'Interval1', 'Interval2', 'Interval3', 'Interval4'],
            this.state.item.running,
            this.state.item.break,
            this.state.item.wordcount,
          ],
          axes: {
            WordCount: 'y2',
          },
          types: { Running: 'bar', Break: 'bar', WordCount: 'line' },
        },
        axis: {
          x: {
            type: 'category',
          },
          y: {
            label: 'Time',
          },
          y2: {
            show: true,
            label: 'Word Count',
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
    return <IssueAnalysisView item={item} />;
  }
}
export default IssueAnalysis;
