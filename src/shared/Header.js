import React from 'react';
import Logo from '../assets/img/logo_transparent.png';
import '../assets/css/Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <header className="Header">
        <img src={Logo} alt="Binnentuinapp Logo" />
      </header>
    )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Header;

