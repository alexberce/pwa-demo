import React, { Component } from 'react';
import './AuthenticatedApp.css';
import Header from "./../../Screens/Header/Header";
import Content from "./../../Screens/Content/Content";
import Offline from "./../../Components/Notifications/Offline/Offline";

class AuthenticatedApp extends Component {
    render() {
        return (
            <div className="App">
                <Offline />
                <Header />
                <Content/>
            </div>
        );
    }
}

export default AuthenticatedApp;
