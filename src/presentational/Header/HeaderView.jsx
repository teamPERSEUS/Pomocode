import React from 'react';
import { Link } from '@reach/router';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import PerseusTomato from '../../img/PerseusTomato.png';

const HeaderView = ({ logout }) => (
  <div className="header">
    <Link to="/">
      <img className="logo" src={PerseusTomato} style={{ width: 70, height: 65 }} alt="Perseus Logo" />
    </Link>
    <button className="logout-button" type="button" onClick={logout}>Logout</button>
    <h3 className="header-title">Pomocode</h3>
    <Login />
    <Navbar />
  </div>
);

export default HeaderView;
