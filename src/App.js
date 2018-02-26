import React, {Component} from 'react';
import './App.css';
import Header from "./Screens/Header/Header";
import Content from "./Screens/Content/Content";
import Offline from "./Components/Notifications/Offline/Offline";
import {Link, withRouter} from "react-router-dom";

import Routes from "./Routing/UnauthenticatedRouting";


class App extends Component {
    render() {
        const childProps = {
            isAuthenticated: true,
            userHasAuthenticated: true
        };

        return (
            <Routes childProps={childProps}/>
        );
    }
}

export default withRouter(App);
