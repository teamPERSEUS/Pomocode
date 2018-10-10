import React from 'react';
import DayPicker from './DayPicker/DayPicker';

const IssueDescView = ({ selectedIssue }) => { 
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
