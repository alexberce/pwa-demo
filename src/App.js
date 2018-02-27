import React, {Component} from 'react';
import './App.css';
import {withRouter} from "react-router-dom";

import Routes from "./Routing/Routes";
import {connect} from "react-redux";


class App extends Component {

    constructor(params){
        super(params);

        this.state = {
            isLoggedIn: this.props.isLoggedIn,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            isLoggedIn: nextProps.isLoggedIn
        });
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isLoggedIn,
        };

        return (
            <div className="app">
                <Routes childProps={childProps}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isPerformingLoginRequest: state.user.isPerformingLoginRequest,
        isLoggedIn: state.user.isLoggedIn,
    }
};

export default connect(mapStateToProps)(withRouter(App));