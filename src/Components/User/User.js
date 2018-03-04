import React, { Component } from 'react';
import './User.css';

class User extends Component {
    render() {
        const {email, screen_name} = this.props;

        return (
            <div className="user-item">
                <div className="user-item-avatar" />
                <div className="user-item-details">
                    <div className="user-item-name">{screen_name}</div>
                    <div className="user-item-email">{email}</div>
                </div>
            </div>
        );
    }
}

export default User;