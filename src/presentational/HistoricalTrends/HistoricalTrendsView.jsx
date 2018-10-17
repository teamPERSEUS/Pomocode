import React from 'react';
import Historical from '../../img/Historical.png';

const HistoricalTrendsView = () => { 
  return (
    <div className="historical-trends">
      <h3>Historical Trends</h3>
      <img src={Historical} style={{ width: 450, height: 300 }} alt="Historical Trends Table" />
    </div>
  );
};

export default HistoricalTrendsView;
