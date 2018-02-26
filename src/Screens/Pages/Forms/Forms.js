import React, { Component } from 'react';
import './Forms.css';

import Form from "../../../Components/Form/Form.js";


class Forms extends Component {

    constructor(params){
        super(params);

        this.forms = [
            {id: 1, name: 'My first form'},
            {id: 2, name: 'My second form'},
            {id: 3, name: 'My third form'},
            {id: 4, name: 'My fourth form'},
            {id: 5, name: 'My fifth form'},
            {id: 6, name: 'My sixth form'},
        ];
    }

    render() {
        return (
            <div>
                <div className="page-title">My Forms</div>

                <div className="forms-page-forms-wrapper">
                    {this.forms.map((form, index) => (
                        <Form key={index} {...form} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Forms;