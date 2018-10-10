import React from 'react';
import MainChart from '../MainChart/MainChart';
import IntervalUpdates from '../IntervalUpdates/IntervalUpdates';
import IssueSelector from '../IssueSelector/IssueSelector';
import IssueProgress from '../IssueProgress/IssueProgress';
import SubChart from '../SubChart/SubChart';

const HomePageView = ({ repos, issues }) => (
  <div>
    <IntervalUpdates />
    <IssueSelector repos={repos} issues={issues} />
    <IssueProgress />
    <MainChart />
    <SubChart />
  </div>
);

export default HomePageView;
