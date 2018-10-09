import React from 'react';
import DatePicker from 'react-date-picker';

class DayPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
    this.onChange = this.onChange.bind(this);
  }


  onChange(date) {
    this.setState({ date });
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          value={date}
        />
      </div>
    );
  }
}

export default DayPicker;
