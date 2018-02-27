import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import './Menu.css';

class Menu extends Component {

    /**
     * @param pageName
     */
    changePage(pageName){
        this.props.history.push(pageName);
    }

    render() {
        const {match} = this.props;

        const pages = [
            {
                url: '/dashboard',
                title: 'Dashboard',
            },
            {
                url: '/forms',
                title: 'Forms'
            },
            {
                url: '/users',
                title: 'Users'
            }
        ];

        return (
            <div className="app-menu">
                {
                    pages.map((page) => {
                        let active = page.url === match.url ? 'active' : '';
                        return <span key={page.url} className={`app-menu-item ${active}`} onClick={() => this.changePage(page.url)}>{page.title}</span>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

export default withRouter(connect(mapStateToProps)(Menu));