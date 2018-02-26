import React, { Component } from 'react';
import logo from '../../Assets/Images/logo.png';
import './Header.css';

import Menu from './Menu/Menu.js';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="app-boundary ">
                    <img src={logo} className="app-logo" alt="logo" />
                    <Menu />
                </div>
            </header>
        );
    }
}

export default Header;