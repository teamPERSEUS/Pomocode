import React from 'react';
import DayPicker from './DayPicker/DayPicker';

const IssueDescView = () => { 
  return (
    <div>
      <div>Box with Issue Description</div>
      <form>
        <label>
          Number of Hours:
          <input type="text" />
          hrs
          <br />
          Date
          <DayPicker />
        </label>
      </form>
    </div>
  );
};

export default IssueDescView;
