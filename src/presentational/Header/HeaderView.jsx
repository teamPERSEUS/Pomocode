import React from 'react';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';

const HeaderView = () => { 
  return (
    <div>
      <h1>PomoCode</h1>
      <h2 className="description">A pomodoro timer that enhances productivity</h2>
      <Login />
      <Navbar />
    </div>
  );
};

export default HeaderView;
