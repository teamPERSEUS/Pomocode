import React from 'react';
import IntervalUpdatesView from './IntervalUpdatesView';

class IntervalUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervals: [
        {
          Date1: {
            intervalNum: 5,
            issues: [
              {
                number: 1,
                title: 'MockTest1',
                date: '10/15',
              },
              {
                number: 2,
                title: 'MockTest2',
                date: '10/15',
              },
              {
                number: 3,
                title: 'MockTest3',
                date: '10/15',
              }],
          },
        },
        {
          Date2: {
            intervalNum: 4,
            issues: [
              {
                number: 4,
                title: 'MockTest4',
                date: '10/15',
              },
            ],
          },
        },
        {
          date: {
            intervalNum: 3,
            issues: [
              {
                number: 5,
                title: 'MockTest5',
                date: '10/15',
              },
              {
                number: 6,
                title: 'MockTest6',
                date: '10/15',
              },
            ],
          },
        },
      ],
      analysisInfo: {
        type: null,
        number: null,
        category: 'Files',
      },
    };

    this.getAnalysis = this.getAnalysis.bind(this);
  }

  getAnalysis(type, number) {
    this.setState({
      analysisInfo: {
        type,
        number,
      },
    });
  }

  render() {
    const { intervals, analysisInfo } = this.state;
    const { user } = this.props;
    return (
      <IntervalUpdatesView
        user={user}
        intervals={intervals}
        analysisInfo={analysisInfo}
        getAnalysis={this.getAnalysis}
      />
    );
  }
}
export default IntervalUpdates;
