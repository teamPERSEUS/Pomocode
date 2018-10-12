import React from 'react';
import GitHubLogo from '../../img/GitHub-Mark-32px.png';

const LoginView = ({ loginURL }) => (
  <div className="login">
    <h1>Pomocode</h1>
    <h3 className="description">A Productivity tool that helps you improve your time estimation.</h3>
    <a className="login-button" href={loginURL}>
      <img src={GitHubLogo} alt="gitHubLogo" />
      <span>Login with GitHub</span>
    </a>
  </div>
);

export default LoginView;
