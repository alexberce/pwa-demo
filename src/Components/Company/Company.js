import React, { Component } from 'react';
import './Company.css';

class Company extends Component {
    render() {
        const {id, name, active} = this.props;
        const activeClass = active ? 'active' : '';

        return (
            <div className={`company-item ${activeClass}`}>
                <span className="company-item-name">{name}</span>
            </div>
        );
    }
}

export default Company;