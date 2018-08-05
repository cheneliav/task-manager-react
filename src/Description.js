import React, { Component } from 'react';
import EditableLabel from 'react-inline-editing';
import './Description.css'

class Description extends Component {
    _handleFocusOut = (text) =>{
        this.props._handleFocusOut(text,"description");
    } 
    render() {
        return (
            <EditableLabel text={this.props.info}
                    labelClassName='myLabelClass'
                    inputClassName='myInputClass'
                    inputWidth='200px'
                    inputHeight='25px'
                    inputMaxLength='50'
                    labelFontWeight='normal'
                    inputFontWeight='normal'
                    onFocusOut={this._handleFocusOut}
            />
        );
    }
}

export default Description;