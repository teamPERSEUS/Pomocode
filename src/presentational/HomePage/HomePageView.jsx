import React from 'react';
import MainChart from '../MainChart/MainChart';
import IntervalUpdates from '../IntervalUpdates/IssueProgress';
import IssueSelector from '../IssueSelector/IssueSelector';
import IssueProgress from '../IssueProgress/IssueProgress';
import SubChart from '../SubChart/SubChart';

const HomePageView = ({ repos, issues, plannedIssues, getPlannedIssues }) => (
  <div className="homepage">
    <IntervalUpdates />
    <MainChart />
    <IssueSelector repos={repos} issues={issues} getPlannedIssues={getPlannedIssues} />
    <IssueProgress plannedIssues={plannedIssues} />
    <SubChart />
  </div>
);

export default HomePageView;
