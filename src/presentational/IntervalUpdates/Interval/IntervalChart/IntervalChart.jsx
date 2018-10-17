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
    this.setState({
      columns: ['Plan', 5],
      rows: ['Actuals', 3],
    });
  }

  render() {
    const { issue, getAnalysis } = this.props;
    return (
      <div>
        <span onClick={() => getAnalysis('Issue', issue.number, issue.git_id)}>
          {`Issue #${issue.number}: ${issue.issueName} (${issue.repo_url})`}
        </span>
        <IntervalChartView issue={issue} />
        <div>
          You have spent
          {` ${issue.columns[1][1] + issue.columns[2][1]}/${issue.columns[0][1]} `}
          hours planned on
          {` ${issue.issueName}`}
        </div>
      </div>
    );
  }
}

export default IntervalChart;
