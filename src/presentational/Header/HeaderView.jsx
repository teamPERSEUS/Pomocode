import React from 'react';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';

const HeaderView = () => {
  return (
    <div className="header">
      <h3>PomoCode</h3>
      <Login />
      <Navbar />
    </div>
  );
};

export default HeaderView;
