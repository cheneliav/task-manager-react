import React, { Component } from 'react';
import EditableLabel from 'react-inline-editing';
import './PersonOnTheTask.css'

class PersonOnTheTask extends Component {
    _handleFocusOut = (text) =>{
        this.props._handleFocusOut(text,"assignedTo");
    } 
    render() {
        return (
                <EditableLabel text={this.props.name}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='bold'
                    inputFontWeight='bold'
                    onFocus={this._handleFocus}
                    onFocusOut={this._handleFocusOut}
                />
        );
    }
}

export default PersonOnTheTask;