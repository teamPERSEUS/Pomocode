import React from 'react';
import IntervalUpdatesView from './IntervalUpdatesView';

class IntervalUpdates extends React.Component {
  constructor() {
    super();
    this.state = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8'];
  }

  render() {
    return <IntervalUpdatesView intervals={this.state} />;
  }
}
export default IntervalUpdates;
