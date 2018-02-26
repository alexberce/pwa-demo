import React, { Component } from 'react';
import './Content.css';

//Pages
import Forms from "../Pages/Forms/Forms";

class Content extends Component {
    render() {
        return (
            <div className="app-boundary app-page-content">
                <Forms />
            </div>
        );
    }
}

export default Content;