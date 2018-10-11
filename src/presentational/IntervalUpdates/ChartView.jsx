import React from 'react';
import { generate } from 'c3';

class ChartView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._updateChart();
  }

  _updateChart() {
    const bind = `#${this.props.issue}`;

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
        height: 20,
        width: 400,
      },
    });
  }

  render() {
    return <div id={this.props.issue.toString()}>{this.props.issue}</div>;
  }
}

export default ChartView;
