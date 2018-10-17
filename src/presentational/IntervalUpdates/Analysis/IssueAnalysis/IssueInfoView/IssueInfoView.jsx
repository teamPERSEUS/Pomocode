import React from 'react';

const IssueInfoView = ({ item }) => (
  <div>
    <h3>Issue Info</h3>
    GitHub Name:
    {item.username}
    <br />
    Repo Name:
    {item.reponame}
    <br />
    Issue Number:
    {item.number}
    <br />
    Issue Title:
    {item.title}
    <br />
    Description:
    {item.body}
  </div>
);

export default IssueInfoView;
