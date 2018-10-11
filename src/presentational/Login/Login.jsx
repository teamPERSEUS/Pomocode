import React from 'react';
import LoginView from './LoginView';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loginURL } = this.props;
    return <LoginView loginURL={loginURL} />;
  }
}

export default Login;
