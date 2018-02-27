import React, { Component } from 'react';
import './Forms.css';

import Form from "../../../Components/Form/Form.js";
import API from "../../../Services/Api";
import {connect} from "react-redux";

const api = API.create();

class Forms extends Component {

    constructor(params){
        super(params);

        //This will be moved to the model ... don't have time for it right now
        let forms = [];
        try {
            forms = JSON.parse(localStorage.getItem('forms'));
        } catch (e) {

        }

        this.state = {
            forms: forms,
        };
    }

    componentWillMount(){
        //This will be moved in the saga ... don't have time for it right now
        api.getForms(this.props.token)
        .then(result => {
            //This will be moved to the model ... don't have time for it right now
            const forms = result.data.data || [];
            try {
                localStorage.setItem('forms', JSON.stringify(forms));
            } catch (e) {

            }
            this.setState({ forms: forms });
        });
    }

    render() {
        return (
            <div className="forms-page">
                <div className="page-title">My Forms</div>

                <div className="forms-page-forms-wrapper">
                    {this.state.forms.length ? this.state.forms.map((form, index) => (
                        <Form key={index} {...form} />
                    )): null}
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

export default connect(mapStateToProps)(Forms);