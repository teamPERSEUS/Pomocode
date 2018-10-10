import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

const IssueDescView = ({ selectedIssue, hours, minutes, date, setMinutes, setHours, onDateChange, handleSubmit }) => { 
  return (
    <div>
      Repo: {selectedIssue.reponame}
      <br />
      Issue Number: {selectedIssue.number}
      <br />
      <strong>{selectedIssue.title}</strong>
      <br />
      Description: {selectedIssue.body}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          <strong>Time Allotted to Issue:</strong>
          <br />
          <input
            type="text"
            id="hours"
            value={hours}
            onChange={setHours}
            placeholder="add here..."
          />
          {' '}
          hours
          <br />
          <br />
          <input
            type="text"
            id="minutes"
            value={minutes}
            onChange={setMinutes}
            placeholder="add here..."
          />
          {' '}
          minutes
          <br />
          <strong>Date</strong>
          <DateRangePicker
            onChange={onDateChange}
            value={date}
          />
        </label>
        <br />
        <button type="submit" value="Submit">
          <strong>Submit Issue</strong>
        </button>
      </form>
    </div>
  );
};

export default IssueDescView;
