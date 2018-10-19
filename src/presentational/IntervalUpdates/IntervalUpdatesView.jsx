import React from 'react';
import IntervalIssueView from './Interval/IntervalIssueView';
import Analysis from './Analysis/Analysis';

const IntervalUpdatesView = ({
  user, intervals, analysisInfo, getAnalysis,
}) => (
  <div className="interval-updates-container">
    <div className="interval-list-container">
      <h3 className="interval-updates-title">Interval Updates</h3>
      <div className="interval-list" style={{ height: '450px', overflow: 'auto', overflowX: 'hidden' }}>
        {intervals.map((intervalObj) => {
          const interval = Object.values(intervalObj);
          return (
            <div className="interval" key={interval[0].bindTo}>
              <strong
                onClick={() => getAnalysis('Interval', interval[0].intervalNum, interval[0].repo_url)
                }
              >
                {`Interval #${interval[0].intervalNum}`}
              </strong>
              {interval.map(issue => (
                <IntervalIssueView
                  key={`${issue.intervalNum}_${issue.number}`}
                  issue={issue}
                  getAnalysis={getAnalysis}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
    <div className="analysis-container">
      <Analysis analysisInfo={analysisInfo} user={user} />
    </div>
  </div>
);

export default IntervalUpdatesView;
