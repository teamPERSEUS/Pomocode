import React from 'react';
import { Link } from '@reach/router';
import PerseusTomato from '../../img/PerseusTomato.png';

const HeaderView = ({ logout }) => (
  <div className="header">
    <Link to="/">
      <img className="logo" src={PerseusTomato} style={{ width: 60, height: 50 }} alt="Perseus Logo" />
    </Link>
    <h3 className="header-title">Pomocode</h3>
    <button className="logout-button" type="button" onClick={logout}><strong>Logout</strong></button>
  </div>
);

export default HeaderView;
