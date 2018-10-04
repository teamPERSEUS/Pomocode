import React from 'react';
import './style.css';
import Dropdown from './Dropdown';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h2>PomoCalendar</h2>
        <table>
          <tbody>
            <tr>
              <th>Hour</th>
              <th>Github Workflow</th>
              <th>Things To Do</th>
              <th>Interval Updates</th>
            </tr>
            <tr>
              <td>8am</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td>3 commits, 1 pull request, 24 lines writtten, 300 characters per hour working in Dashboard.jsx file on PomoCode Repo </td>
            </tr>
            <tr>
              <td>9am</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td>1 review request, 800 characters written, 2 Pomodoro breaks skipped</td>
            </tr>
            <tr>
              <td>10am</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td />
            </tr>
            <tr>
              <td>11am</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td />
            </tr>
            <tr>
              <td>12pm</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td />
            </tr>
            <tr>
              <td>1pm</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td />
            </tr>
            <tr>
              <td>2pm</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td />
            </tr>
            <tr>
              <td>3pm</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td />
            </tr>
            <tr>
              <td>4pm</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td />
            </tr>
            <tr>
              <td>5pm</td>
              <td><Dropdown /></td>
              <td><input type="text" /></td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
