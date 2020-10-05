import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <span>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'
            className='header-link'>
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login' className='header-link'>Login</Link>
        {' '}
        <Link to='/register' className='header-link'>Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <>
        <header>
          <h1>
            <Link to='/' className='header-link'>
              Spaced repetition
            </Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </header>
        <div className='flag-red'>&nbsp;</div>
        <div className='flag-yellow'>&nbsp;</div>
      </>
    );
  }
}

export default Header;
