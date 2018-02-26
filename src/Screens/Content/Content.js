import React, { Component } from 'react';
import './Content.css';

//Pages
import Routes from "../../Routes";

class Content extends Component {
    render() {
        const childProps = {
            isAuthenticated: true,
            userHasAuthenticated: true
        };

        return (
            <div className="app-boundary app-page-content">
                <Routes  childProps={childProps} />
            </div>
        );
    }
}

export default Content;