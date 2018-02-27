import React, { Component } from 'react';
import './Header.css';

import Menu from './Menu/Menu.js';
import Logo from "../../../../Components/Logo/Logo";

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="app-boundary ">
                    <Logo className="app-logo" />
                    <Menu />
                </div>
            </header>
        );
    }
}

export default Header;