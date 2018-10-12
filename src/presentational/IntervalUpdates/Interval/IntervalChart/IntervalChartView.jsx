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
        columns: [['Plan', 5], ['Actual', 6]],
        type: 'bar',
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
