import React from 'react';

const IssueInfoView = ({ item }) => (
  <div>
    <h3>Issue Info</h3>
    Repo Name:
    {` ${item.reponame}`}
    <br />
    <br />
    {`#${item.number}:`}
    {` ${item.title}`}
    <br />
    <br />
    Description:
    {` ${item.body.substring(0, 50)}...`}
  </div>
);

export default IssueInfoView;
