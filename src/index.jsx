import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Test />;
  }
}

ReactDOM.render(<App />, document.body);
