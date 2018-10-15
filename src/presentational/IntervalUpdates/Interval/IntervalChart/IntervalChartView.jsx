import React from 'react';
import { generate } from 'c3';

class IntervalChartView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._updateChart();
  }

  _updateChart() {
    const bind = `#${this.props.interval}`;

    generate({
      bindto: bind,
      data: {
        columns: [['Plan', 230], ['Time Already Spent', 130], ['Time Spent this Interval', 30]],
        type: 'bar',
        groups: [['Time Already Spent', 'Time Spent this Interval']],
      },
      legend: {
        position: 'right',
      },
      axis: {
        y: {
          show: false,
        },
        x: {
          show: false,
        },
        rotated: true,
      },
      size: {
        height: 45,
        width: 600,
      },
    });
  }

  render() {
    return <div id={this.props.interval.toString()}>{this.props.interval}</div>;
  }
}

export default IntervalChartView;
