import React from 'react';
import HeaderView from './HeaderView';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { logout } = this.props;
    return (
      <HeaderView logout={logout} />
    );
  }
}
export default Header;
