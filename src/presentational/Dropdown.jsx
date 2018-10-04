import React from 'react';
import './style.css';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false,
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    const { displayMenu } = this.state;
    return (
      <div className="dropdown">
        <div className="menuTitle" onClick={this.showDropdownMenu}> Select your Issue </div>

        { displayMenu ? (
          <ul>
            <li><a className="active" href="#Create Page">#1</a></li>
            <li><a href="#2">#2</a></li>
            <li><a href="#3">#3</a></li>
            <li><a href="#4">#4</a></li>
            <li><a href="#5">#5</a></li>
            <li><a href="#6">#6</a></li>
            <li><a href="#7">#7</a></li>
          </ul>
        ) : null }
      </div>
    );
  }
}

export default Dropdown;
