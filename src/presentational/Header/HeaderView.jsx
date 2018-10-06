import React from 'react';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';

const HeaderView = () => { 
  return (
    <div>
      <h2>Header</h2>
      <Login />
      <Navbar />
    </div>
  );
};

export default HeaderView;
