import React from 'react';
import ChartView from './ChartView';

class IssueChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      rows: [],
    };
  }

  componentDidMount() {
    // this.parseChartData();
    this.setState({
      columns: ['Plan', 5],
      rows: ['Actuals', 3],
    });
  }

  // parseChartData() {}

  render() {
    return (
      <div>
        <div>Interval# Issue Title Plan Date</div>
        <ChartView issue={this.props.issue} column={this.state.columns} row={this.state.rows} />
        <div>You have spent 5/7 hours planned on issue title</div>
      </div>
    );
  }
}

export default IssueChart;
