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
    const { issue } = this.props;
    const bind = `#chart${issue.bindTo}`;

    generate({
      bindto: bind,
      data: {
        columns: issue.columns,
        type: 'bar',
        groups: issue.groups,
        order: null,
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
    const { issue } = this.props;
    return <div id={`chart${issue.bindTo}`} />;
  }
}

export default IntervalChartView;
