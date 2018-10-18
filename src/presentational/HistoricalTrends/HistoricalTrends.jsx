import React from 'react';
import axios from 'axios';
import { generate } from 'c3';
import '../../../node_modules/c3/c3.css';
import HistoricalTrendsView from './HistoricalTrendsView';

const analyticsURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:4002' : process.env.ANALYTICS_SERVICE;

class HistoricalTrends extends React.Component {
  constructor() {
    super();
    this.state = {
      trends: {
        columns: [
          ['Date', '10/13', '10/14', '10/15', '10/16'],
          ['Active', 3, 3, 4, 8],
          ['Idle', 1, 2, 7, 2],
        ],
      },
    };
    this.getData = this.getData.bind(this);
    this.updateChart = this.updateChart.bind(this);
  }

  componentDidMount() {
    this.updateChart();
  }

  getData() {
    const { user } = this.props;
    axios
      .get(`${analyticsURL}/api/historicalTrends`, { params: { user } })
      .then((response) => {
        console.log(response.data);
        this.setState(
          {
            trends: response.data,
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
    const { trends } = this.state;
    generate({
      bindto: '#trends',
      data: {
        x: 'Date',
        columns: trends.columns,
        type: 'line',
      },
      axis: {
        x: {
          type: 'category',
        },
        y: {
          label: 'Time(hrs)',
        },
      },
    });
  }

  render() {
    return (
      <HistoricalTrendsView />
    );
  }
}
export default HistoricalTrends;
