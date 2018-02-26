import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
        const {id, name} = this.props;

        return (
            <div className="form-item">
                <input name={`form-item-selector-${id}`} type="checkbox" className="form-item-selector" />
                <span className="form-item-name">{name}</span>
            </div>
        );
    }
}

export default Form;