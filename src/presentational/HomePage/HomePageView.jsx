import React from 'react';
import IntervalUpdates from '../IntervalUpdates/IntervalUpdates';
import IssueSelector from '../IssueSelector/IssueSelector';
import IssueProgress from '../IssueProgress/IssueProgress';
import HistoricalTrends from '../HistoricalTrends/HistoricalTrends';

const HomePageView = ({
  user, repos, issues, plannedIssues, getPlannedIssues,
}) => (
  <div className="homepage">
    <IntervalUpdates user={user} />
    <IssueSelector repos={repos} issues={issues} getPlannedIssues={getPlannedIssues} />
    <IssueProgress plannedIssues={plannedIssues} getPlannedIssues={getPlannedIssues} />
    <HistoricalTrends />
  </div>
);

export default HomePageView;
