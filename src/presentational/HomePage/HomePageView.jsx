import React from 'react';
import IntervalUpdates from '../IntervalUpdates/IntervalUpdates';
import IssueSelector from '../IssueSelector/IssueSelector';
import IssueProgress from '../IssueProgress/IssueProgress';
import SubChart from '../SubChart/SubChart';

const HomePageView = ({
  user, repos, issues, plannedIssues, getPlannedIssues,
}) => (
  <div className="homepage">
      <IntervalUpdates user={user} />
      <IssueSelector repos={repos} issues={issues} getPlannedIssues={getPlannedIssues} />
      <IssueProgress plannedIssues={plannedIssues} />
      <SubChart />
    </div>
);

export default HomePageView;
