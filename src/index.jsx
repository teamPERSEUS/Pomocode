import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <h1 className="logo">PomoCode</h1>
        <h2 className="description">A pomodoro timer that enhances productivity</h2>
          <nav>
            <ul className="pagesmenu">
              <li>Home</li>
              <li>Pomodoro Timer</li>
              <li>Calendar</li>
              <li>Plan</li>
              <li>Updates Per Interval</li>
              <li>Daily Charts</li>
              <li>Weekly Charts</li>
            </ul>
          </nav>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
