import React from 'react';

const IntervalInfoView = ({ item }) => (
  <div>
    <h3>Interval Info</h3>
    Repo Name:
    {item.reponame}
    <br />
    Interval WordCount:
    {item.wordCount}
    <br />
    Idle Time:
    {item.idleTime}
    <br />
    Most Active:
    {item.mostActive}
  </div>
);

export default IntervalInfoView;
