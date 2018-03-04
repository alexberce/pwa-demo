import React, { Component } from 'react';
import {connect} from "react-redux";

import './Users.css';
import API from "../../../Services/Api";
import User from "../../../Components/User/User";
import Company from "../../../Components/Company/Company";
import EmptyState from "../../../Components/State/Empty/EmptyState";

const api = API.create();

class Users extends Component {

    constructor(params){
        super(params);

        //This will be moved to the model ... don't have time for it right now
        let users = [],
            companies = [];

        try {
            users = JSON.parse(localStorage.getItem('users')) || [];
        } catch (e) {

        }

        try {
            companies = JSON.parse(localStorage.getItem('companies')) || [];
        } catch (e) {

        }

        this.state = {
            users: users,
            companies: companies,
            activeCompany: null,
        };
    };

    componentWillMount(){
        this.getUsers();
        this.getCompanies();
    };

    getUsers(){
        //This will be moved in the saga ... don't have time for it right now
        api.getUsers(this.props.token)
            .then(result => {
                //This will be moved to the model ... don't have time for it right now
                const users = result.data.data || [];
                try {
                    localStorage.setItem('users', JSON.stringify(users));
                } catch (e) {

                }
                this.setState({ users: users });
            });
    };

    getCompanies(){
        //This will be moved in the saga ... don't have time for it right now
        api.getCompanies(this.props.token)
            .then(result => {
                //This will be moved to the model ... don't have time for it right now
                const companies = result.data.data || [];
                try {
                    localStorage.setItem('companies', JSON.stringify(companies));
                } catch (e) {

                }
                this.setState({ companies: companies });
            });
    };

    changeActiveCompany = (companyName) => {
        this.setState({
            activeCompany: companyName
        });
    };

    render() {
        let filteredItems = this.state.users;
        if (this.state.activeCompany) {
            filteredItems = this.state.users.filter((user) => user.company_name === this.state.activeCompany);
        }

        return (
            <div className="users-page">
                {
                    this.state.companies.length
                        ? <div className="users-page-companies-wrapper">
                            {this.state.companies.map((company, index) => (
                                <div
                                    onClick={() => this.changeActiveCompany(company.name)}
                                    key={company.id}
                                >
                                    <Company
                                        {...company}
                                        active={this.state.activeCompany===company.name}
                                    />
                                </div>
                            ))}
                        </div>
                        : null
                }

                <div className="users-page-users-wrapper">
                    <div className="page-title">
                        <span
                            className="path main"
                            onClick={() => this.changeActiveCompany(null)}>
                            Users
                        </span>
                        {
                            this.state.activeCompany
                                ? <span className="users-page-bread-crumbs">
                                    <span className="path separator">/</span>
                                    <span className="path">{this.state.activeCompany}</span>
                                </span>
                                : null
                        }
                    </div>

                    {filteredItems.length ? filteredItems.map((user, index) => (
                        <User key={user.id} {...user} />
                    )): <EmptyState text="No users found" />}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.user.token,
    }
};

export default connect(mapStateToProps)(Users);