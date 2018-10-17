import React from 'react';
import c3 from 'c3';
import axios from 'axios';
import '../../../../../node_modules/c3/c3.css';
import { array } from 'prop-types';
import IssueAnalysisView from './IssueAnalysisView';

class IssueAnalysis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        columns: [
          ['Interval', 'No.1', 'No.2', 'No.3', 'No.4'],
          ['Running', 3, 3, 4, 1],
          ['Break', 1, 2, 3, 4],
          ['WordCount', 2, 1, 4, 3],
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
      // git_id: '',
    };
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    // this.getIssuesData();
    this.updateChart();
  }

  // user this.props.user, this.props.analysisInfo.identifier (git_id), this.props.analysisInfo.number
  getIssuesData() {
    const { user, analysisInfo } = this.props;
    axios
      .get('http://localhost:4002/api/issueAnalysis', {
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
    c3.generate({
      bindto: bind,
      data: {
        x: 'Interval',
        columns: item.columns,
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

  render() {
    const { item } = this.state;
    return <IssueAnalysisView item={item} />;
  }
}
export default IssueAnalysis;
