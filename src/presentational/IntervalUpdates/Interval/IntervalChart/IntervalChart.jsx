import React from 'react';
import IntervalChartView from './IntervalChartView';

class IntervalChart extends React.Component {
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

  // parseChartData()

  render() {
    const { issue, getAnalysis } = this.props;
    const { columns, rows } = this.state;
    return (
      <div>
        <span onClick={() => getAnalysis('Issue', issue.number, issue.git_id)}>
          {`Issue #${issue.number}: ${issue.title} (${issue.date})`}
        </span>
        <IntervalChartView issue={issue.title} column={columns} row={rows} />
        <div>You have spent 5/7 hours planned on issue title</div>
      </div>
    );
  }
}

export default IntervalChart;
