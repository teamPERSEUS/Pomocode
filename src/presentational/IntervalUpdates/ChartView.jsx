import React from 'react';
import c3 from 'c3';

class ChartView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._updateChart();
  }

  _updateChart() {
    const bind = `#${this.props.issue}`;

    c3.generate({
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
