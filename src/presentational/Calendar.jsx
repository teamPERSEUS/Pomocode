import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Daily Calendar</h2>
        9am -
        <br />
        10am -
        <br />
        ...
        <br />
        5pm -
      </div>
    );
  }
}

export default Calendar;
