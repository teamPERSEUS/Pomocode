import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const IssueDescView = ({
  selectedIssue, hours, minutes, date, setMinutes, setHours, onDateChange, handleSubmit
}) => (
    <div>
      <strong>Issue description:</strong>
      <div className="issue-desc-box">
        <strong>
          {selectedIssue.git_id !== undefined ? `#${selectedIssue.number}: ${selectedIssue.title}` : null}
        </strong>
        <br />
        <br />
        {selectedIssue.body !== undefined ? `${selectedIssue.body}` : null}
        <br />
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <strong>Time Allotment:</strong>
        <br />
        <input
          type="text"
          id="hours"
          value={hours}
          onChange={setHours}
          placeholder="estimate hours..."
        />
        {' '}
        <input
          type="text"
          id="minutes"
          value={minutes}
          onChange={setMinutes}
          placeholder="estimate minutes..."
        />
        <br />
        <br />
        <strong>Date Range: </strong>
        <br />
        <DateRangePicker
          onChange={onDateChange}
          value={date}
        />
        <br />
        <br />
        <button className="submit-button" type="submit" value="Submit">
          <strong>Submit Issue</strong>
        </button>
      </form>
    </div>
  );

export default IssueDescView;
