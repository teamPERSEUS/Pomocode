import React from 'react';
import DayPicker from './DayPicker/DayPicker';

const IssueDescView = () => { 
  return (
    <div>
      <strong>Issue Title</strong>
      <br />
      The body of the issue.
      <br />
      <br />
      <form>
        <label>
          <strong>Number of Hours:</strong>
          <br />
          <input type="text" />
          {' '}
          hrs
          <br />
          <strong>Date</strong>
          <DayPicker />
        </label>
        <br />
        <button type="submit"><strong>Submit Issue</strong></button>
      </form>
    </div>
  );
};

export default IssueDescView;
