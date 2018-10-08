import React from 'react';

const IssueDescView = () => { 
  return (
    <div>
      <div>Box with Issue Description</div>
      <form>
        <label>
          Hours:
          <input type="text" />
          Days:
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default IssueDescView;
