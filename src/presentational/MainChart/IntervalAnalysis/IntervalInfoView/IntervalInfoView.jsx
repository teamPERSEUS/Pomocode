import React from 'react';

const IntervalInfoView = ({ item }) => (
  <div>
    <h3>Interval Info</h3>
    GitHub Name:
    {item.username}
    <br />
    Repo Name:
    {item.reponame}
    <br />
    Interval Number:
    {item.number}
    <br />
    Interval Title:
    {item.title}
    <br />
    Description:
    {item.body}
  </div>
);

export default IntervalInfoView;
