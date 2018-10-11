import React from 'react';
import GitHubLogo from '../../img/GitHub-Mark-32px.png';

const LoginView = ({ loginURL }) => (
  <div>
    <a href={loginURL}>
      <img src={GitHubLogo} alt="gitHubLogo" />
      <span>Login with GitHub</span>
    </a>
  </div>
);

export default LoginView;
