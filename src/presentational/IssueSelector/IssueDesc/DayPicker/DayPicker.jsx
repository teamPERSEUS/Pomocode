import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

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
        <DateRangePicker
          onChange={this.onChange}
          value={date}
        />
      </div>
    );
  }
}

export default DayPicker;
