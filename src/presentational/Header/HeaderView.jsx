import React from 'react';
import { Link } from '@reach/router';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';

const HeaderView = ({ logout }) => (
  <div className="header">
    <h3>Pomocode</h3>
    <Link to="/">Home</Link>
    <Link to="/historicaltrends">Historical Trends</Link>
    <button onClick={logout}>Logout</button>
    <Login />
    <Navbar />
  </div>
);

export default HeaderView;
