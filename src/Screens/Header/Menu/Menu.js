import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <div className="app-menu">
                <span className="app-menu-item">Dashboard</span>
                <span className="app-menu-item active">My Forms</span>
                <span className="app-menu-item">Users</span>
            </div>
        );
    }
}

export default Menu;