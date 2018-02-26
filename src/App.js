import React, {Component} from 'react';
import './App.css';
import {Link, withRouter} from "react-router-dom";

import Routes from "./Routing/Routes";


class App extends Component {
    render() {
        const childProps = {
            isAuthenticated: true,
            userHasAuthenticated: true
        };

        return (
            <div className="app">
                <Routes childProps={childProps}/>
            </div>
        );
    }
}

export default withRouter(App);
